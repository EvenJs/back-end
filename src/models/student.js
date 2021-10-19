const { Schema, model } = require('mongoose');
const Joi = require('joi');

const schema = new Schema({
  firstName:{
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 10,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (email) => {
        // const validation = Joi.string().email().validate(email);
        // const { error } = validation;
        // if (error) {
        //   return false;
        // }
        // return true;

        // regex 
        return !Joi.string().email.validate(email).error;
      },
      msg: 'invalid email format',
    }
  },
});

module.exports = model('Student', schema);
