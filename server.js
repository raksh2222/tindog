const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));

app.get('/home', function (req,res) {
    res.sendFile(path.join(__dirname, 'public' , 'index.html'));
});

app.listen('3000', function () {
    console.log(path.join(__dirname, 'public' , 'index.html')+'on port 3000');
});