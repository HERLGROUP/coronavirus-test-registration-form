const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
  surname: {
    type: String,
    required: true
  },
  givenname: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  placeofresidence: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
 
  category: {
    type: String,
    required: true
  },

  
});
// export model user with UserSchema

module.exports = mongoose.model("user", UserSchema);

