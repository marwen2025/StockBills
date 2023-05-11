import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'

const Profile = () => {
  const [user,setUser] = useState({});
  const navigate=useNavigate()
    useEffect(()=>async()=>{
        await axios.get("/api/users/loggedin").then((response) => {if(response.data !== true ){
        navigate("/login")
    }
    })
    },[])
useEffect(()=>{
     axios.get("/api/users/getuser").then((response) =>{
        setUser(response.data)
        
})
},[])
console.log(user)
const [form,setForm]=useState({})
    const onChangeHandler =(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
        
    }
const onSubmitHandler =(e)=>{
    e.preventDefault();
    axios.patch(`/api/users/updateUser`,form).then(res=>{
        if (res.status !== 200) {
        toast.error(res.data.message)}
        else{
            toast.success("Profile updated successfully")
            
        }
    }).catch(err=>{
        toast.error(err.response.data.message)})
    
}  
const passChange=(e)=>{
    e.preventDefault();
    axios.patch(`/api/users/changePassword`,form).then(res=>{
        if(res.status!==200){
            toast.error(res.data.message)
        }
        else{
            toast.success("Password updated successfully")
        }
    }).catch(err=>{
        toast.error(err.response.data.message)
    })
}
  return (
    <div>
      
      <Navbar/>
      <div className='xl:ml-[256px] pt-4 px-14'>
      <Toaster/>
      <h2 className='text-2xl font-bold border-indigo-900 border-b-2'> Profile  :</h2>
      <div className="pt-4">
      <form onSubmit={onSubmitHandler} className='min-w-[500PX] '>
    <div className="grid  gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900" > name</label>
            <input defaultValue={user.name} onChange={onChangeHandler} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>
        <div>
            <label for="company" className="block mb-2 text-sm font-medium text-gray-900">Company</label>
            <input defaultValue={user.companyName} onChange={onChangeHandler} type="text" name="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>  
        <div>
            <label for="company" className="block mb-2 text-sm font-medium text-gray-900 ">Bio</label>
            <input defaultValue={user.bio} onChange={onChangeHandler} type="text" name="bio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>  
        <div>
            <label for="company" className="block mb-2 text-sm font-medium text-gray-900">Photo</label>
            <input defaultValue={user.photo} onChange={onChangeHandler} type="text" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>  
        
    </div>
    
    
    
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-800 dark:hover:bg-violet-700 dark:focus:ring-blue-800">Submit</button>
</form>
      </div>
      <h2 className='text-2xl font-bold pt-24 border-indigo-900 border-b-2'> Password Change :</h2>
<div className=''>

<form onSubmit={passChange} >
<div className="mb-6 pt-4">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Old Password</label>
        <input onChange={onChangeHandler} type="password" name="oldPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    <div className="mb-6">
        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 ">New password</label>
        <input onChange={onChangeHandler} type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-800 dark:hover:bg-violet-700 dark:focus:ring-blue-800">Submit</button>

</form>
</div>
</div>
    </div>
  )
}

export default Profile