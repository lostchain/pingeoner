const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    passwordConfirm: {
        type: String,
        required: [true, "Password confirm is required."],
        validate: {
            validator: function(el) {
                return el === this.password;
            },
            message: "Passwords DO NOT match, try again."
        }
    }
},{timestamps: true});

userSchema.pre('save', async function(next) { // Pre-saving middleware that hashes our password before storing in DB.
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
})

module.exports = mongoose.model("user", userSchema);