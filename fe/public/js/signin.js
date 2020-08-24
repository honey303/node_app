function add_user_to_db() {
   let userid = document.getElementById('email').value;
   let pwd = document.getElementById('pwd').value;
   // console.log(userid, pwd);
   let errorMessage = '<div class="alert alert-info alert-dismissible">' +
                         '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
                         '<strong>Alert!</strong> Incorrect Password! Please try again!' +
                      '</div>'

   let url = `https://b9kznciqll.execute-api.us-east-1.amazonaws.com/dev/adduser`

   data = {
     'email': userid,
     'password': pwd
   }
   var requestOptions = {
     method: 'POST',
     redirect: 'follow',
     body: JSON.stringify(data)
   };
   let userForm = document.getElementById('user_form');
   let msgs = document.getElementById('messages');
   userForm.reset();
   // Make the REST api call
   fetch(url, requestOptions)
     .then(response => response.json())
     .then(result => {
       if (result.statusCode == 200) {
         console.log(result.body);
       }
       else {
         if (result.statusCode == 401) {
           msgs.innerHTML = `<p class="errorMessage";>${result.body}</p>`;
           // alert(result.body);
         }
       }
     })
     .catch(error => {
       // msgs.innerHTML = err;
       console.log('error', error)
     });
}
