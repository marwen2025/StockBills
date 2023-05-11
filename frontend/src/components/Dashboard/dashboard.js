import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function Dashboard () {
const [clientN, setClientN] = useState(0)
const [productN, setProductN] = useState(0)
const [invoiceN,setInvoiceN]=useState(0)
const navigate=useNavigate()
const [earns,setEarns]=useState(0)
useEffect(() => {
  axios.get("/api/users/loggedin").then((response) => {
    if (response.data === false) {
      navigate("/login");
    }
  });
  axios.get("api/user/clients/getClients").then((response) => {
    setClientN(response.data.length)
     
})
 axios.get("/api/user/products/getProducts").then((response) => {
  setProductN(response.data.length)

})
axios.get("/api/user/invoices/getInvoices/").then((response) => {
  setInvoiceN(response.data)
  setEarns(response.data.map(obj => obj.total).reduce((acc, curr) => acc + curr, 0))
})
}, []);

   


  return (

    <>
      <Navbar />
      <div className='xl:ml-[256px] pt-4 px-14'>
        <h1 className=' text-2xl font-bold border-indigo-900 border-b-2'> Dashboard :</h1>
        </div>
      <div className='xl:flex px-24  xl:px-8 py-20 space-y-6 xl:space-y-0  xl:space-x-6  xl:ml-[256px]'>

        <div className=' flex xl:space-y-0 space-x-24 xl:space-x-6'>
        <a className="block min-w-[300px] max-w-[600px] items-center justify-between p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><svg width={80} height={80} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_901_1341)">
              <path d="M15 17C15 15.343 13.657 14 12 14M12 14C10.343 14 9 15.343 9 17C9 18.657 10.343 20 12 20C13.657 20 15 21.343 15 23C15 24.657 13.657 26 12 26M12 14V13M12 26C10.343 26 9 24.657 9 23M12 26V27M22 31H31V29M25 26H31V24M26 21H31V19M26 16H31V14M23 11H31V9M10 6H31V1H7V6M23 20C23 13.926 18.074 9 12 9C5.926 9 1 13.926 1 20C1 26.074 5.926 31 12 31C18.074 31 23 26.074 23 20Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_901_1341">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg> Total Earns : </h5>
          <h4 className="font-normal text-3xl text-gray-700 dark:text-gray-400">{earns} TND</h4>
        </a>
        <a className="block min-w-[300px] max-w-[600px] items-center justify-between p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <svg width={80} height={80} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clip-rule="evenodd" d="M4.2359 10.0547C3.69336 10.8685 3.40385 11.8247 3.40385 12.8028L3.40385 13.5C3.40385 14.0522 2.95614 14.5 2.40385 14.5C1.85157 14.5 1.40385 14.0522 1.40385 13.5L1.40385 12.8028C1.40385 11.4299 1.81023 10.0877 2.5718 8.94531L4.2359 10.0547Z" fill="#ffffff" />
                            <path fillRule="evenodd" clip-rule="evenodd" d="M6.20663 9C5.41471 9 4.67519 9.39578 4.23591 10.0547L2.57181 8.9453C3.38202 7.72998 4.74601 7 6.20663 7H6.40386C6.95614 7 7.40386 7.44772 7.40386 8C7.40386 8.55228 6.95614 9 6.40386 9H6.20663Z" fill="#ffffff" />
                            <path fillRule="evenodd" clip-rule="evenodd" d="M8.41797 10.0547C8.96051 10.8685 9.25002 11.8247 9.25002 12.8028L9.25002 13.5C9.25002 14.0522 9.69773 14.5 10.25 14.5C10.8023 14.5 11.25 14.0522 11.25 13.5L11.25 12.8028C11.25 11.4299 10.8436 10.0877 10.0821 8.94531L8.41797 10.0547Z" fill="#ffffff" />
                            <path fillRule="evenodd" clip-rule="evenodd" d="M6.44724 9C7.23916 9 7.97868 9.39578 8.41796 10.0547L10.0821 8.9453C9.27185 7.72998 7.90786 7 6.44724 7H6.25001C5.69773 7 5.25001 7.44772 5.25001 8C5.25001 8.55228 5.69773 9 6.25001 9H6.44724Z" fill="#ffffff" />
                            <path fillRule="evenodd" clip-rule="evenodd" d="M6.25 6.25C6.94036 6.25 7.5 5.69036 7.5 5C7.5 4.30964 6.94036 3.75 6.25 3.75C5.55964 3.75 5 4.30964 5 5C5 5.69036 5.55964 6.25 6.25 6.25ZM6.25 8.25C8.04493 8.25 9.5 6.79493 9.5 5C9.5 3.20507 8.04493 1.75 6.25 1.75C4.45507 1.75 3 3.20507 3 5C3 6.79493 4.45507 8.25 6.25 8.25Z" fill="#ffffff" />
                            <path fillRule="evenodd" clip-rule="evenodd" d="M11.4859 13.3047C10.9434 14.1185 10.6538 15.0747 10.6539 16.0528L10.6539 16.75C10.6539 17.3022 10.2061 17.75 9.65385 17.75C9.10157 17.75 8.65385 17.3022 8.65385 16.75L8.65385 16.0528C8.65385 14.6799 9.06023 13.3377 9.8218 12.1953L11.4859 13.3047Z" fill="#ffffff" />
                            <path fillRule="evenodd" clip-rule="evenodd" d="M13.4566 12.25C12.6647 12.25 11.9252 12.6458 11.4859 13.3047L9.82181 12.1953C10.632 10.98 11.996 10.25 13.4566 10.25H13.6539C14.2061 10.25 14.6539 10.6977 14.6539 11.25C14.6539 11.8023 14.2061 12.25 13.6539 12.25H13.4566Z" fill="#ffffff" />
                            <path fillRule="evenodd" clip-rule="evenodd" d="M15.668 13.3047C16.2105 14.1185 16.5 15.0747 16.5 16.0528L16.5 16.75C16.5 17.3022 16.9477 17.75 17.5 17.75C18.0523 17.75 18.5 17.3022 18.5 16.75L18.5 16.0528C18.5 14.6799 18.0936 13.3377 17.3321 12.1953L15.668 13.3047Z" fill="#ffffff" />
                            <path fillRule="evenodd" clip-rule="evenodd" d="M13.6972 12.25C14.4892 12.25 15.2287 12.6458 15.668 13.3047L17.3321 12.1953C16.5219 10.98 15.1579 10.25 13.6972 10.25H13.5C12.9477 10.25 12.5 10.6977 12.5 11.25C12.5 11.8023 12.9477 12.25 13.5 12.25H13.6972Z" fill="#ffffff" />
                            <path fillRule="evenodd" clip-rule="evenodd" d="M13.5 9.5C14.1904 9.5 14.75 8.94036 14.75 8.25C14.75 7.55964 14.1904 7 13.5 7C12.8096 7 12.25 7.55964 12.25 8.25C12.25 8.94036 12.8096 9.5 13.5 9.5ZM13.5 11.5C15.2949 11.5 16.75 10.0449 16.75 8.25C16.75 6.45507 15.2949 5 13.5 5C11.7051 5 10.25 6.45507 10.25 8.25C10.25 10.0449 11.7051 11.5 13.5 11.5Z" fill="#ffffff" />
                        </svg>
                         Total Clients : </h5>
          <h4 className="font-normal text-3xl text-gray-700 dark:text-gray-400">{clientN}</h4>
        </a>
        </div>
        <div className='flex xl:space-y-0 space-x-24 xl:space-x-6'>
        <a className="  min-w-[300px] max-w-[600px] items-center justify-between p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">                        
          <svg  fill="#ffffff" width={80} height={80} viewBox="10 10 85 85" xmlns="http://www.w3.org/2000/svg"><path d="M26.1,36.1H73a2.65,2.65,0,0,0,2.6-2.6V22.6A2.65,2.65,0,0,0,73,20H26.1a2.65,2.65,0,0,0-2.6,2.6V33.5A2.65,2.65,0,0,0,26.1,36.1ZM49.5,23.5a4.35,4.35,0,1,1-4.3,4.4A4.35,4.35,0,0,1,49.5,23.5Z" /><path d="M26.1,54.3H73a2.61,2.61,0,0,0,2.6-2.7V40.9A2.65,2.65,0,0,0,73,38.3H26.1A2.61,2.61,0,0,0,23.5,41V51.6A2.67,2.67,0,0,0,26.1,54.3Zm25.2-8a4.35,4.35,0,1,1,0,.1Zm-13,0a4.35,4.35,0,1,1,0,.1Z" /><path d="M76.2,71.3l-.8-.8L69,64.1a.85.85,0,0,0-1.3,0l-1.3,1.3a.91.91,0,0,0-.3.7,1.08,1.08,0,0,0,.3.7l2.2,2.3a.59.59,0,0,1,.1.7.68.68,0,0,1-.6.4H60.6a1,1,0,0,0-1,.9V73a1.06,1.06,0,0,0,1,.9h7.6a.82.82,0,0,1,.6.4.88.88,0,0,1-.1.7l-2.2,2.3a.85.85,0,0,0,0,1.3l1.3,1.3a.85.85,0,0,0,1.3,0l7.2-7.1A1.2,1.2,0,0,0,76.2,71.3Z" /><path d="M63.7,67.5a3.19,3.19,0,0,1-.3-1.4,3.63,3.63,0,0,1,1.1-2.6l1.3-1.3a3.47,3.47,0,0,1,4.9-.2c.1,0,.1.1.2.2l4.7,4.9v-8A2.61,2.61,0,0,0,73,56.4H26.1a2.61,2.61,0,0,0-2.6,2.7V69.7a2.67,2.67,0,0,0,2.6,2.7H57V70.9a3.61,3.61,0,0,1,3.6-3.4ZM40.8,64.3a4.36,4.36,0,1,1,0-.1Zm13,0a4.44,4.44,0,0,1-4.3,4.5,4.53,4.53,0,0,1-4.6-4.3,4.46,4.46,0,0,1,4.3-4.6,4.53,4.53,0,0,1,4.6,4.3Z" /></svg>
 Total Products : </h5>
          <h4 className="font-normal text-center text-3xl text-gray-700 dark:text-gray-400">{productN}</h4>
        </a><a className="block min-w-[300px] max-w-[600px] items-center justify-between p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">                        
          <svg fill="#ffffff" width={80} height={80} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" /></svg>
 Total Invoices : </h5>
          <h4 className="font-normal  text-3xl text-gray-700 dark:text-gray-400">{invoiceN.length}</h4>
        </a>
        </div>

      </div></>
  )
}

export default Dashboard