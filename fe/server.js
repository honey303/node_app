const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/login.html'));
});

app.listen(port, () => console.log(`Server is running on port ${port}`))
