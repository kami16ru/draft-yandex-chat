// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const clientPath = path.join(__dirname, './dist');

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
  res.sendFile(path.join(clientPath, '/pages/auth/login/login.html'));
});

app.get('/register', function(req, res){
  res.sendFile(path.join(clientPath, '/pages/auth/register/register.html'));
});

app.get('/profile', function(req, res){
  res.sendFile(path.join(clientPath, '/pages/profile/profile.html'));
});

app.get('/profile/edit', function(req, res){
  res.sendFile(path.join(clientPath, '/pages/profile/edit/edit.html'));
});

app.get('/profile/edit/password', function(req, res){
  res.sendFile(path.join(clientPath, '/pages/profile/edit/password/password.html'));
});

app.get('/chat', function(req, res){
  res.sendFile(path.join(clientPath, '/pages/chat/index.html'));
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
