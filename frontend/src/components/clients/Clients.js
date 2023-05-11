import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import RowDetails from './rowDetails'
import Modal from './Modal'
import { Toaster, toast } from 'react-hot-toast'
import ModalEdit from './ModalEdit'
const Clients = () => {
    const [showModal,setShowModal]=useState(false);
    const [showModalEdit,setShowModalEdit]=useState(false);
    const[test,setTest]=useState();
    const[clientId,setClientId]=useState();
    useEffect(()=>{
        axios.get("/api/users/loggedin").then((response) => {if(response.data !== true ){
           navigate("/login")
       }
       })
   },[])
    const onDelete=(_id)=>{
        
        if(window.confirm("are you sure to delete this client")){
         axios.delete(`/api/user/clients/deleteClient/${_id}`).then(res=>{
            console.log(_id)
            if (res.status === 200){toast.success("removed successfully") 
            setTest(prevState =>!prevState);
         }
            else{toast.error("error")}
             
         })
        }
     }
    const navigate=useNavigate()

  const [clients,setClients] =useState([])
  useEffect(()=>{
     axios.get("/api/user/clients/getClients").then((response) => {
        setClients(response.data)
    })
  },[showModal || showModalEdit || test])

  return (
    <div>
        <div><Toaster/></div>
        <Navbar/>
        <div className='xl:ml-[256px] pt-4 px-14'>
        <h1 className=' text-2xl font-bold border-indigo-900 border-b-2'> Clients :</h1>
        </div>
        <div className='flex flex-col items-end pr-12 pt-8'>
        <button onClick={()=>setShowModal(true)} type="button" className="flex-col flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><svg width="30px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z"/></svg>Add</button>
        </div>
        
        
        <div className='xl:ml-[256px] pt-4 px-14'>
            <ModalEdit isVisible={showModalEdit} clientId={clientId} onClose={()=>setShowModalEdit(false)} /> 
            <Modal isVisible={showModal} onClose={()=>setShowModal(false)}/>
    <div class=" overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Matricule
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        First Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Phone Number
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                    clients.map(({matricule,name,firstname,email,phoneNumber,_id})=>(
                    <RowDetails OpenModel={setShowModalEdit} OnDelete={onDelete} Matricule={matricule} Id={_id} Name={name} FirstName={firstname} EMmail={email} PhoneNumber={phoneNumber} setClientId={setClientId}/>))
                
                }
                
                
                
            </tbody>
        </table>
    </div>
    </div>
    </div>
  )
}

export default Clients