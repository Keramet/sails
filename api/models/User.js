/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const bcrypt = require('bcryptjs');


module.exports = {

  schema: true,

  attributes: {
    email: {
      type:     'email',
      required: true,
      unique:   true
    },

    password: {
      type:      'string',
      minLength: 6,
      required:  true
    },

    toJSON: function toJSON () {
      let obj = this.toObject();
      delete obj.password;
      return obj;
    } 
  },

  beforeCreate: (user, cb) => {
    bcrypt.genSalt( 10, (err, salt) => {
      bcrypt.hash( user.password, salt, (err, hash) => {
        if (err) { return cb(err); }

        user.password = hash;
        cb();
      });
    });
  }

};

