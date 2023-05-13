
import React, { useEffect } from 'react'

import style from './register.module.css'
import {Toaster} from 'react-hot-toast'
import { useFormik } from 'formik'
import { VerifysignUp} from '../../helper/validate'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";


const Register = () => {
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
            password1:'',   
            name:'',
        },
        validate: VerifysignUp,
        validateOnBlur: false,
        validateOnChange:false,
        onSubmit: async values => {
            try{
            await axios.post("/api/users/register",{email:values.email,password:values.password,name:values.name}).then((response) => {if(response.status === 201 ){
                navigate("/Dashboard")
            }
        else {
            toast.error("failed")
        }})
        }catch(e) {
            toast.error("this Email exists try to signIn") 
        }
    }
    })
    return (
        <div className='container mx-auto'>


            <Toaster position="top-center"  reverseOrder={false}></Toaster>
            <div className='flex justify-center items-center h-screen'>
                <div className={style.glass}>

                    <div className='title flex flex-col items-center'>
                        <h4 className='text-5xl font-bold '>
                            Join StockBills
                        </h4>
                        {/* <div className='profile flex justify-center my-4 '>
                    <img className={style.logo_img} src={logo} alt="logo"/>
                    </div> */}
                        <span className='py-4 text-sm w-2/3 text-center text-gray-500'>
                            Grow With Us 
                        </span>
                    </div>
                    <form className='py-1' onSubmit={formik.handleSubmit}>

                        <div className="textbox flex flex-col items-center gap-6">
                            <input {...formik.getFieldProps("email")} className={style.textbox} type="text" placeholder="Email" />
                            <input {...formik.getFieldProps("name")} className={style.textbox} type="text" placeholder="Name" />
                            <input {...formik.getFieldProps("password")} className={style.textbox} type="password" placeholder="Password" />
                            <input {...formik.getFieldProps("password1")} className={style.textbox} type="password" placeholder="RewritePassword" />

                            <button className={style.btn} type="submit" >SignUp</button>
                            
                        </div>


                    </form>
                </div>
            </div>
        </div>
  )
}

export default Register