import React from 'react'
import { Link } from 'react-router-dom'
import style from './reset.module.css'
import {Toaster, toast} from 'react-hot-toast'
import { useFormik } from 'formik'
import { verifyemail} from '../../helper/validate'
import axios from 'axios'


const Email = () => {
    const formik = useFormik({
        initialValues:{
            email:''
        },
        validate: verifyemail,
        validateOnBlur: false,
        validateOnChange:false,
        onSubmit: async values => {
            try{
                await axios.post("/api/users/forgotpassword",{email:values.email}).then((response) => {if(response.status === 200 ){
                    toast.success("Token has been successfully sent")
                    }
                else {
                    toast.error("failed")
                }})
            }catch (e){
                toast.error("email address not found");
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
                            Forgot Your Password
                        </h4>
                        {/* <div className='profile flex justify-center my-4 '>
                    <img className={style.logo_img} src={logo} alt="logo"/>
                    </div> */}
                        <span className='py-4 text-sm w-2/3 text-center text-gray-500'>
                            Enter your email adress to recover your password
                        </span>
                    </div>
                    <form className='py-1' onSubmit={formik.handleSubmit}>

                        <div className="textbox flex flex-col items-center gap-6">
                            <input {...formik.getFieldProps("email")} className={style.textbox} type="text" placeholder="Email" />

                            
                            <button className={style.btn} type="submit" >Send</button>
                            
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

export default Email