// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        //email        : String,
        //password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        //email        : String,
        name         : String
    },
    info             : {
        sign_in_count: { type: Number, default: 1 },
        last_sign_in: { type: Date, default: Date.now() },
        keeps        : {type: Number,default: 0},
        dusts        : {type: Number,default: 0}

    }


});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);