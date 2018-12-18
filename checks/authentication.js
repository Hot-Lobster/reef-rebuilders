const express = require('express');
const app = express();
const { check, validationResult } = require('express-validator/check');

app.post('/user', [
  check('email').isEmail()
,
  // password must be at least 8 chars long
  check('password', 'The password must be 8+ chars long and contain a number')
  .not().in(['123', 'password', 'god', this.state.username]).withMessage('Do not use a common word as the password')
  .isLength({ min: 8 })
  .matches(/\d/)

], (req, res) => { 
  // Finds the validation errors in this request and wraps them in an object
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  app.post('/user', body('passwordConfirmation').custom((value, { req }) => {
    if (value !== this.state.password) {
      throw new Error('Password confirmation does not match password');
    }
  }), (req, res) => {
    // Handle the request
  });


  User.create({
    username: this.state.username,
    password: this.state.password,
    email: this.state.email
  }).then(user => res.json(user));


