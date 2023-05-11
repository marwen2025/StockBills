const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const ClientSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    matricule: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: [true, "Please enter a name"]
    },

    phoneNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email address"
        ]

    },



});

const Client = mongoose.model("Client", ClientSchema)

module.exports = Client;