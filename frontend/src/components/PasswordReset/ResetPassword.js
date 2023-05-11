import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import style from './reset.module.css'
import {Toaster, toast} from 'react-hot-toast'
import { useFormik } from 'formik'
import { verifypasswordreset} from '../../helper/validate'
import axios from 'axios'


const ResetPassword = () => {
    const { token } = useParams();

    const formik = useFormik({
        initialValues:{
            password1:'',
            password:'',
        },
        validate: verifypasswordreset,
        validateOnBlur: false,
        validateOnChange:false,
        onSubmit: async values => {
            try{
                console.log(token);
                await axios.put(`/api/users/resetpassword/${token}`,{password:values.password}).then((response) => {if(response.status === 200 ){
                    toast.success("password has been changed successfully")

                    }
                else {
                    toast.error("failed")
                }})
            }catch (e){
                toast.error("Token has expired");
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
                            <span className='text-gray-500'>Password is Reseted ? <Link className='text-red-500' to="/login">Login </Link></span>
                        </div>
                </div>
            </div>
        </div>
  )
}

export default ResetPassword