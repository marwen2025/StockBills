const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema({
    name:{
        type : String,
        required: [true,"Please enter a name"]
    },
    email:{
        type : String,
        required: [true,"Please enter an email"],
        unique : true,
        trim : true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email address"
        ]

    },
    password:{
        type : 'String',
        required: [true,"Please enter a password"],
        minLength: [6,"Password must have more than 6 characters"]
    },
    photo:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png"
    },
    companyName: {
        type: String,
        required: [true,"Please enter a company name"],
        default:"no company name"

    },
    bio:{
        type: String,
        maxLength:[250,"Bio must not be more than 250 characters"],
        default:"bio"
    },

},
{
    timestamps: true,
});

////Encrypt password

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    //hash the password
    const salt=await bcrypt.genSalt(15);
    const hashedPassword=await bcrypt.hash(this.password,salt);
    this.password=hashedPassword;
    next();
})

const User = mongoose.model("User",userSchema);
module.exports = User;