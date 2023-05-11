import React, { useState } from "react";
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    let menuArray = [true, false, false];
    const navigate=useNavigate()
    const [show, setShow] = useState(false);
    let logout=async()=>{
        await axios.get("/api/users/logout").then((response) => {if(response.status === 200 ){
          navigate("/")
      } 
      })}

    return (
        <div className="">
            <div className="rounded-r bg-gray-900 xl:hidden flex justify-between w-full p-6 items-center ">
                <div className="flex justify-between  items-center space-x-3">

                    <img src={logo} width={50}></img>
                    <p className="text-2xl leading-6 text-white">Stock & Bills </p>
                </div>
                <div aria-label="toggler" className="flex justify-center items-center">
                    <button aria-label="open" id="open" onClick={() => setShow(true)} className={`${show ? 'hidden' : ''} focus:outline-none focus:ring-2`}>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 18H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button aria-label="close" id="close" onClick={() => setShow(false)} className={`${show ? '' : 'hidden'} focus:outline-none focus:ring-2`}>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id="Main" className={`${show ? 'translate-x-0' : '-translate-x-full'} sm:absolute sm:h-full xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-gray-900 flex-col`}>
                <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
                    <img src={logo} width={50}></img>
                    <p className="text-2xl leading-6 text-white">Stock & Bills </p>
                </div>
                <div className="mt-6 flex  justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
                <Link  to="/Dashboard"> <button className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                        <svg className="fill-stroke " width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4 ">Dashboard</p>
                    </button></Link>


                </div>
                <div className="mt-6 flex justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">

                <Link  to="/Profile"> <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4 ">Profile</p>
                    </button></Link>

                </div>
                <div className="mt-6 flex justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">

                <Link  to="/Products">  <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                        <svg fill="#ffffff" width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M26.1,36.1H73a2.65,2.65,0,0,0,2.6-2.6V22.6A2.65,2.65,0,0,0,73,20H26.1a2.65,2.65,0,0,0-2.6,2.6V33.5A2.65,2.65,0,0,0,26.1,36.1ZM49.5,23.5a4.35,4.35,0,1,1-4.3,4.4A4.35,4.35,0,0,1,49.5,23.5Z" /><path d="M26.1,54.3H73a2.61,2.61,0,0,0,2.6-2.7V40.9A2.65,2.65,0,0,0,73,38.3H26.1A2.61,2.61,0,0,0,23.5,41V51.6A2.67,2.67,0,0,0,26.1,54.3Zm25.2-8a4.35,4.35,0,1,1,0,.1Zm-13,0a4.35,4.35,0,1,1,0,.1Z" /><path d="M76.2,71.3l-.8-.8L69,64.1a.85.85,0,0,0-1.3,0l-1.3,1.3a.91.91,0,0,0-.3.7,1.08,1.08,0,0,0,.3.7l2.2,2.3a.59.59,0,0,1,.1.7.68.68,0,0,1-.6.4H60.6a1,1,0,0,0-1,.9V73a1.06,1.06,0,0,0,1,.9h7.6a.82.82,0,0,1,.6.4.88.88,0,0,1-.1.7l-2.2,2.3a.85.85,0,0,0,0,1.3l1.3,1.3a.85.85,0,0,0,1.3,0l7.2-7.1A1.2,1.2,0,0,0,76.2,71.3Z" /><path d="M63.7,67.5a3.19,3.19,0,0,1-.3-1.4,3.63,3.63,0,0,1,1.1-2.6l1.3-1.3a3.47,3.47,0,0,1,4.9-.2c.1,0,.1.1.2.2l4.7,4.9v-8A2.61,2.61,0,0,0,73,56.4H26.1a2.61,2.61,0,0,0-2.6,2.7V69.7a2.67,2.67,0,0,0,2.6,2.7H57V70.9a3.61,3.61,0,0,1,3.6-3.4ZM40.8,64.3a4.36,4.36,0,1,1,0-.1Zm13,0a4.44,4.44,0,0,1-4.3,4.5,4.53,4.53,0,0,1-4.6-4.3,4.46,4.46,0,0,1,4.3-4.6,4.53,4.53,0,0,1,4.6,4.3Z" /></svg>
                        <p className="text-base leading-4 ">Products</p>
                    </button></Link>

                </div>
                <div className="mt-6 flex  justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">

                <Link  to="/Invoices"><button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                        <svg fill="#ffffff" width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" /></svg>
                        <p className="text-base leading-4 ">Invoices</p>
                    </button></Link>

                </div>
                <div className="mt-6 flex  justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">

                <Link  to="/Clients">  <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                        <svg width={24} height={24} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.2359 10.0547C3.69336 10.8685 3.40385 11.8247 3.40385 12.8028L3.40385 13.5C3.40385 14.0522 2.95614 14.5 2.40385 14.5C1.85157 14.5 1.40385 14.0522 1.40385 13.5L1.40385 12.8028C1.40385 11.4299 1.81023 10.0877 2.5718 8.94531L4.2359 10.0547Z" fill="#ffffff" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20663 9C5.41471 9 4.67519 9.39578 4.23591 10.0547L2.57181 8.9453C3.38202 7.72998 4.74601 7 6.20663 7H6.40386C6.95614 7 7.40386 7.44772 7.40386 8C7.40386 8.55228 6.95614 9 6.40386 9H6.20663Z" fill="#ffffff" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41797 10.0547C8.96051 10.8685 9.25002 11.8247 9.25002 12.8028L9.25002 13.5C9.25002 14.0522 9.69773 14.5 10.25 14.5C10.8023 14.5 11.25 14.0522 11.25 13.5L11.25 12.8028C11.25 11.4299 10.8436 10.0877 10.0821 8.94531L8.41797 10.0547Z" fill="#ffffff" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.44724 9C7.23916 9 7.97868 9.39578 8.41796 10.0547L10.0821 8.9453C9.27185 7.72998 7.90786 7 6.44724 7H6.25001C5.69773 7 5.25001 7.44772 5.25001 8C5.25001 8.55228 5.69773 9 6.25001 9H6.44724Z" fill="#ffffff" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 6.25C6.94036 6.25 7.5 5.69036 7.5 5C7.5 4.30964 6.94036 3.75 6.25 3.75C5.55964 3.75 5 4.30964 5 5C5 5.69036 5.55964 6.25 6.25 6.25ZM6.25 8.25C8.04493 8.25 9.5 6.79493 9.5 5C9.5 3.20507 8.04493 1.75 6.25 1.75C4.45507 1.75 3 3.20507 3 5C3 6.79493 4.45507 8.25 6.25 8.25Z" fill="#ffffff" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4859 13.3047C10.9434 14.1185 10.6538 15.0747 10.6539 16.0528L10.6539 16.75C10.6539 17.3022 10.2061 17.75 9.65385 17.75C9.10157 17.75 8.65385 17.3022 8.65385 16.75L8.65385 16.0528C8.65385 14.6799 9.06023 13.3377 9.8218 12.1953L11.4859 13.3047Z" fill="#ffffff" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4566 12.25C12.6647 12.25 11.9252 12.6458 11.4859 13.3047L9.82181 12.1953C10.632 10.98 11.996 10.25 13.4566 10.25H13.6539C14.2061 10.25 14.6539 10.6977 14.6539 11.25C14.6539 11.8023 14.2061 12.25 13.6539 12.25H13.4566Z" fill="#ffffff" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.668 13.3047C16.2105 14.1185 16.5 15.0747 16.5 16.0528L16.5 16.75C16.5 17.3022 16.9477 17.75 17.5 17.75C18.0523 17.75 18.5 17.3022 18.5 16.75L18.5 16.0528C18.5 14.6799 18.0936 13.3377 17.3321 12.1953L15.668 13.3047Z" fill="#ffffff" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6972 12.25C14.4892 12.25 15.2287 12.6458 15.668 13.3047L17.3321 12.1953C16.5219 10.98 15.1579 10.25 13.6972 10.25H13.5C12.9477 10.25 12.5 10.6977 12.5 11.25C12.5 11.8023 12.9477 12.25 13.5 12.25H13.6972Z" fill="#ffffff" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 9.5C14.1904 9.5 14.75 8.94036 14.75 8.25C14.75 7.55964 14.1904 7 13.5 7C12.8096 7 12.25 7.55964 12.25 8.25C12.25 8.94036 12.8096 9.5 13.5 9.5ZM13.5 11.5C15.2949 11.5 16.75 10.0449 16.75 8.25C16.75 6.45507 15.2949 5 13.5 5C11.7051 5 10.25 6.45507 10.25 8.25C10.25 10.0449 11.7051 11.5 13.5 11.5Z" fill="#ffffff" />
                        </svg>
                        <p className="text-base leading-4 ">Clients</p>
                    </button></Link>

                </div>
                <div className="mt-6 flex justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">

                  <button  onClick={logout}  className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                        <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                            width={24} height={24} viewBox="0 0 52 52" enable-background="new 0 0 52 52" >
                            <g>
                                <path d="M21,48.5v-3c0-0.8-0.7-1.5-1.5-1.5h-10C8.7,44,8,43.3,8,42.5v-33C8,8.7,8.7,8,9.5,8h10
		C20.3,8,21,7.3,21,6.5v-3C21,2.7,20.3,2,19.5,2H6C3.8,2,2,3.8,2,6v40c0,2.2,1.8,4,4,4h13.5C20.3,50,21,49.3,21,48.5z"/>
                                <path d="M49.6,27c0.6-0.6,0.6-1.5,0-2.1L36.1,11.4c-0.6-0.6-1.5-0.6-2.1,0l-2.1,2.1c-0.6,0.6-0.6,1.5,0,2.1l5.6,5.6
		c0.6,0.6,0.2,1.7-0.7,1.7H15.5c-0.8,0-1.5,0.6-1.5,1.4v3c0,0.8,0.7,1.6,1.5,1.6h21.2c0.9,0,1.3,1.1,0.7,1.7l-5.6,5.6
		c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0L49.6,27z"/>
                            </g>
                        </svg>
                        <p className="text-base leading-4 ">Logout</p>
                    </button>

                </div>


            </div>

        </div>
    )
}

export default Navbar