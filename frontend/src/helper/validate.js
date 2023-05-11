
import toast from 'react-hot-toast'

export async function verifylogin(values){
    const errors = loginVerify({},values);
    if (errors){
        return errors
    }   

}
export async function VerifysignUp(values){
    const errors = signUpVerify({},values);
    return errors;
}
export async function verifypasswordreset(values){
    const errors = passwordVerify({},values);
    return errors;
}
export async function verifyemail(values){
    const errors = emailVerify({},values);
    return errors;
}

function loginVerify(error={},values){
    if(!values.email || !values.password){
        error.values=toast.error("fill all the fields !");
    }
    else if(!values.email.match( /\S+@\S+\.\S+/ )){
        error.values=toast.error("use a correct email address !");
    }
    else if(values.password.length < 6){
        error.values=toast.error("password must be at least 6 characters");
    }
    return error;
}
function signUpVerify(error={},values){
    if(!values.email || !values.password || !values.password1 || !values.name){
        error.values=toast.error("fill all the fields !");
    }
    else if(!values.email.match( /\S+@\S+\.\S+/ )){
        error.values=toast.error("use a correct email address !");
    }
    else if(values.password.length < 6){
        error.values=toast.error("password must be at least 6 characters");
    }
    else if(values.password !== values.password1){
        error.values=toast.error("password must be the same");
    }
    return error;
}
function passwordVerify(error={},values){
    if(!values.password || !values.password1 ){
        error.values=toast.error("fill all the fields !");}
    else if(values.password.length < 6){
        error.values=toast.error("password must be at least 6 characters");
    }
    else if(values.password !== values.password1){
        error.values=toast.error("password must be the same");}
    return error;
}
function emailVerify(error={},values){
    if(!values.email.match( /\S+@\S+\.\S+/ )){
        error.values=toast.error("use a correct email address !");
    }
    return error;
}

