// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;
const clientPath = path.join(__dirname, '../client/dist');

app.use(express.static(clientPath));

// Routes

app.get('/', function(req, res){
  res.sendFile(path.join(clientPath, '/index.html'));
  // res.redirect('login');
});

app.get('*/404', function(req, res){
  res.sendFile(path.join(clientPath, '/pages/error/404.html'));
});

app.get('/500', function(req, res){
  res.sendFile(path.join(clientPath, '/pages/error/500.html'));
});

app.get('/login', function(req, res){
  res.sendFile(path.join(clientPath, '/pages/auth/login.html'));
});

// Error handlers

app.use(function(req, res, next){
  res.status(404);

  res.format({
    html: function () {
      res.redirect('404')
    },
    json: function () {
      res.json({ error: 'Not found' })
    },
    default: function () {
      res.type('txt').send('Not found')
    }
  })
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.redirect('500');
});

if (!module.parent) {
  app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
  });
}
