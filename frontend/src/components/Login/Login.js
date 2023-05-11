import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import style from './login.module.css'
import {Toaster} from 'react-hot-toast'
import { useFormik } from 'formik'
import {verifylogin} from '../../helper/validate'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
        useEffect(() => {
          axios.get("/api/users/loggedin").then((response) => {
            if (response.data === true) {
              navigate("/Dashboard");
            }
          });
        }, [navigate]);
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        validate: verifylogin,
        validateOnBlur: false,
        validateOnChange:false,
        onSubmit: async values => {
            await axios.post("/api/users/login",{email:values.email,password:values.password}).then((response) => {if(response.status === 200 ){
                navigate("/dashboard")
            }
        else {
            toast.error("failed")
        }})
        }
    })

    return (
        <div className='container mx-auto'>
            
            <Toaster position="top-center"  reverseOrder={false}></Toaster>
            <div className='flex justify-center items-center h-screen'>
                <div className={style.glass}>

                    <div className='title flex flex-col items-center'>
                        <h4 className='text-5xl font-bold '>
                            Welcome Back
                        </h4>
                        {/* <div className='profile flex justify-center my-4 '>
                    <img className={style.logo_img} src={logo} alt="logo"/>
                    </div> */}
                        <span className='py-4 text-sm w-2/3 text-center text-gray-500'>
                            Explore More By using StockBills .
                        </span>
                     
                    </div>
                    <form className='py-1' onSubmit={formik.handleSubmit}>

                        <div className="textbox flex flex-col items-center gap-4">
                            <input {...formik.getFieldProps("email")} className={style.textbox} type="text" placeholder="Email" />
                            <input {...formik.getFieldProps("password")} className={style.textbox} type="password" placeholder="Password" />
                            <span className='text-gray-500 justify-end'>Forgot password?  <Link className='text-red-500' to="/resetpassword">Reset It</Link></span>
                            <button className={style.btn} type="submit" >Login</button>
                            
                        </div>
                        
                        

                    </form>
                    <div className="textbox text-center py-4">
                            <span className='text-gray-500'>Not a Member ? <Link className='text-red-500' to="/register">Register Now </Link></span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Login