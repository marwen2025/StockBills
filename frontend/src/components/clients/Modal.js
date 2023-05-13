import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const Modal = ({isVisible,onClose}) => {
    
    const [form,setForm]=useState({})
    const onChangeHandler =(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post('/api/user/clients/addClient/', form);
          if (res.status !== 201) {
            toast.error(res.data.message);
          } else {
            toast.success("added successfully");
          }
        } catch (err) {
          toast.error(err.response.data.message);
        }
      }
      
if (!isVisible)return null;
  return (
    <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="fixed xl:ml-[90px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-h-[100vh] max-w-[100vh]  z-50  w-full p-4  ">
    <div className="relative w-full  max-h-full ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={()=>onClose()} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add New Client</h3>
                <form onSubmit={onSubmitHandler} className='min-w-[500PX] '>
    <div className="grid  gap-6 mb-6 md:grid-cols-2">
        <div>
            <label name="name" className="block mb-2 text-sm font-medium text-gray-900"> name</label>
            <input onChange={onChangeHandler} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>
        <div>
            <label name="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
            <input onChange={onChangeHandler} type="text" name="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>  
        <div>
            <label name="matricule" className="block mb-2 text-sm font-medium text-gray-900 ">Matricule</label>
            <input onChange={onChangeHandler} type="text" name="matricule" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>  
        <div>
            <label name="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
            <input onChange={onChangeHandler} type="number" name="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>  
        
    </div>
    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
        <input onChange={onChangeHandler} type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div> 
    
    
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
</form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Modal