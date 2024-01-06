import axios from 'axios';
import React, { useEffect, useState } from 'react'

import image from "../assets/3992747.png"
import logo from "../assets/logo.png"
import image1 from "../assets/3266884.png"
import image2 from "../assets/5454545454.png"
import { Link } from 'react-router-dom'
import Footer from './footer/footer' 
const Home = () => {
  
  const[user,setUser]=useState("Login")
  useEffect(() => {
    axios.get("/api/users/loggedin").then((response) => {
      if (response.data === true) {
        axios.get("/api/users/getuser").then((response) => {
          setUser(response.data.name)
        })
      }
    });
  }, []);
  return (
    <>
    <div className="bg-gradient-to-r from-indigo-500 to-indigo-900 ">
    <nav id="header" class="fixed w-full z-30 top-0 backdrop-blur-lg text-white">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div class="pl-4 flex items-center">
        <a class="toggleColour text-white inline-flex no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">

        <img src={logo} width={50}></img>
          Stock&Bills
        </a>
      </div>
      
      <div class=" flex items-center w-auto   mt-0 bg-transparent text-black  p-0 z-20" id="nav-content">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <Link  to="/login">
        <button
          id="navAction"
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          {user}
        </button>
        </Link>
        </ul>
        
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>

  <div class="pt-24">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

      <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p class="uppercase tracking-loose w-full">What business are you?</p>
        <h1 class="my-4 text-5xl font-bold leading-tight">
        Main message to introduce your business.
        </h1>
        <p class="leading-normal text-2xl mb-8">
        Streamline your operations and increase your profits.
        </p>
        <Link  to="/Register">
        <button  class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          SignUp
        </button>
        </Link>
      </div>

      <div class="w-full md:w-3/5 py-6 text-center">
        <img class="w-full md:w-4/5 z-50" src={image} />
      </div>
    </div>
  </div>
  <div class="relative -mt-12 lg:-mt-24">
    
    <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
          <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
          <path
            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
            opacity="0.100000001"
          ></path>
          <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
        </g>
        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
          <path
            d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
          ></path>
        </g>
      </g>
    </svg>
  </div>
    
  </div>

  <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Discover the app that will revolutionize the way you work
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 pt-40">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
            Simplify Your Business with Us
            </h3>
            <p class="text-gray-600 mb-8">
            Stock&Bills is designed to simplify the management of clients, invoices, and products, so you can focus on what really matters - growing your business. With features like client management, invoicing, and inventory management, our platform makes it easier to manage all aspects of your business in one place.</p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <img src={image1}></img>
          </div>
        </div>
        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
          <img src={image2}></img>
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 pt-36">
              Building Strong Relationships
              </h3>
              <p class="text-gray-600 mb-8">
              Building strong relationships with your clients is key to the success of your business. Our platform allows you to manage your client database, keep track of client information, and view client histories all in one place. This makes it easier to communicate with clients and build stronger relationships with them.
                <br />

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>  

  </>
  )
}

export default Home