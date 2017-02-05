const express = require('express');
const router = express.Router();
const _ = require('lodash');
let {mongoose} = require('./../db/mongoose');
let {authenticate} = require('./../middleware/authenticate');
let {User} = require('./../model/user');
let {Dashboard} = require('./../model/dashboard');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

//POST dashboard
router.post('/dashboard', authenticate, (req, res) => {
  let dashboard = new Dashboard({
    name: req.body.name,
    _creator: req.user._id
  });

  dashboard.save().then((dashboard) => {
    res.send(dashboard);
  }).catch((e) => {
    res.status(400).send(e);
  })
});

//GET dashboard
router.get('/dashboard', authenticate, (req, res) => {

  Dashboard.find({
    _creator: req.user._id
  }).then((dashboards) => {
    res.send({dashboards});
  }, (e) => {
    res.status(400).send(e);
  })
});


//POST/registration
router.post('/users', (req, res) => {
  let body = _.pick(req.body, ['email', 'password']);
  let user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});

//POST /users/login
router.post('/users/login', (req, res) => {
  let body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    })
  }).catch((e) => {
    res.status(400).send();
  });
});


//DELETE /users/logout
router.delete('/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }, () => {
    res.status(400).send();
  });
});

module.exports = router;
