import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'
import RowDetails from './rowDetails'
import ModalShow from './ModalShow'
import ModalAdd from './modalAdd'

const Invoices = () => {
    const navigate = useNavigate();
    const [showModal,setShowModal]=useState(false);
    const [showModalEdit,setShowModalEdit]=useState(false);


    const [invoices,setInvoices]=useState();
    const[test,setTest]=useState();
    const[invoiceId,setInvoiceId]=useState();
    

    useEffect(() => async () => {
        await axios.get("/api/users/loggedin").then((response) => {
            if (response.data !== true) {
                navigate("/login")
            }
        })
    },[])
    useEffect(() =>{
         axios.get("api/user/invoices/getInvoices").then((response) => { 
            setInvoices(response.data)
        })
    },[ showModalEdit || test])

    const onDelete=(_id)=>{
        
        if(window.confirm("are you sure to delete this invoice?")){
         axios.delete(`/api/user/invoices/deleteInvoice/${_id}`).then(res=>{
            console.log(_id+"has been deleted")
            if (res.status === 200){toast.success("removed successfully")
            setTest(prevState =>!prevState);
            }
            else{toast.error("error")}
             
         })
        }
     }


    return (
        <div>
        <div><Toaster/></div>
        <Navbar/>
        <div className='xl:ml-[256px] pt-4 px-14'>
        <h1 className=' text-2xl font-bold border-indigo-900 border-b-2'> Invoices :</h1>
        </div>
        <div className='flex flex-col items-end pr-12 pt-8'>
        <button onClick={()=>setShowModalEdit(true)} type="button" className="flex-col flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><svg width="30px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z"/></svg>Add</button>
        </div>
        
        
        <div className='xl:ml-[256px] pt-4 px-14'>
            { <ModalAdd isVisible={showModalEdit} onClose={()=>setShowModalEdit(false)} />  }
            { <ModalShow isVisible={showModal} invoiceId={invoiceId} onClose={()=>setShowModal(false)}/> }
    <div className=" overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Invoice Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                        client Name
                    </th>

                    <th scope="col" className="px-6 py-3">
                        total
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                    invoices && invoices.map(({_id,clientId,total})=>(
                    <RowDetails OpenModel={setShowModal}  onDelete={onDelete} _id={_id} clientId={clientId} total={total} setInvoiceId={setInvoiceId} />))
                
                }
                           
            </tbody>
        </table>
    </div>
    </div>
    </div>
        
    )
}

export default Invoices