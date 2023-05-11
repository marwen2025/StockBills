import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import RowDetails from './rowDetails'
import Modal from './Modal'
import ModalEdit from './ModalEdit'
import { Toaster, toast } from 'react-hot-toast'
const Product = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const[test,setTest]=useState();
    const[productId,setProductId]=useState();
    const navigate = useNavigate()

    const OnDelete=(_id)=>{
        
        if(window.confirm("are you sure to delete this Product")){
         axios.delete(`/api/user/products/deleteProduct/${_id}`).then(res=>{
            console.log(_id)
            if (res.status === 200){toast.success("removed successfully")
            setTest(prevState =>!prevState);
        }
            else{toast.error("error")}
             
         })
        }
     }
    useEffect(() => async () => {
        await axios.get("/api/users/loggedin").then((response) => {
            if (response.data !== true) {
                navigate("/login")
            }
        })
    }, [])
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("/api/user/products/getProducts").then((response) => {
            setProducts(response.data)
            

        })

    },[showModalEdit || showModal || test ])

    return (
        <div>
            <div><Toaster/></div>
            <Navbar />
            <div className='xl:ml-[256px] pt-4 px-14'>
                <h1 className=' text-2xl font-bold border-indigo-900 border-b-2'> Products :</h1>
            </div>
            <div className='flex flex-col items-end pr-12 pt-8'>
                <button onClick={() => setShowModal(true)} type="button" className="flex-col flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><svg width="30px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z" /></svg>Add</button>
            </div>

            <div className='xl:ml-[256px] pt-4 px-14'>
                <ModalEdit isVisible={showModalEdit} productId={productId} onClose={() => setShowModalEdit(false)} />

                <Modal isVisible={showModal} onClose={() => setShowModal(false)} />

                <div class=" overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product Serial
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(({ serial, name, price, quantity, _id }) => (
                                    <RowDetails setProductId={setProductId} OpenModel={setShowModalEdit} Serial={serial} OnDelete={OnDelete} Name={name} Price={price} Quantity={quantity} ProductId={_id} />))

                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Product