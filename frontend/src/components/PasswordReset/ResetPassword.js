import React from 'react'
import { Link } from 'react-router-dom'
import style from './reset.module.css'
import {Toaster} from 'react-hot-toast'
import { useFormik } from 'formik'
import { verifypasswordreset} from '../../helper/validate'


const ResetPassword = () => {
    const formik = useFormik({
        initialValues:{
            password1:'',
            password:'',
        },
        validate: verifypasswordreset,
        validateOnBlur: false,
        validateOnChange:false,
        onSubmit: async values => {
            console.log(values)
        }
    })
  return (
    <div className='container mx-auto'>


            <Toaster position="top-center"  reverseOrder={false}></Toaster>
            <div className='flex justify-center items-center h-screen'>
                <div className={style.glass}>

                    <div className='title flex flex-col items-center'>
                        <h4 className='text-5xl font-bold '>
                            Reset Your Password
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
                            <input {...formik.getFieldProps("password")} className={style.textbox} type="password" placeholder="Password" />
                            <input {...formik.getFieldProps("password1")} className={style.textbox} type="password" placeholder="Repeat Password" />
                            
                            <button className={style.btn} type="submit" >Reset</button>
                            
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

export default ResetPassword