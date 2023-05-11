import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

const ModalAdd = ({ isVisible, onClose }) => {
    const [clients, setClients] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedClient, setSelectedClient] = useState("");
    const [lineItems, setLineItems] = useState([{ productId: "", quantity: 1 }]);

    useEffect(() => {
        axios.get("/api/user/clients/getClients").then((response) => {
            setClients(response.data);
        });
        axios.get("/api/user/products/getProducts").then((response) => {
            setProducts(response.data);
        });
    }, []);

    const handleClientChange = (event) => {
        setSelectedClient(event.target.value);
    };

    const handleProductChange = (event, index) => {
        const newLineItems = [...lineItems];
        newLineItems[index] = {
            ...newLineItems[index],
            productId: event.target.value,
        };
        setLineItems(newLineItems);
    };

    const handleQuantityChange = (event, index) => {
        const newLineItems = [...lineItems];
        newLineItems[index].quantity = event.target.value;
        setLineItems(newLineItems);
    };
    const removeLineItem = (index) => {
        const newLineItems = [...lineItems];
        newLineItems.splice(index, 1);
        setLineItems(newLineItems);
    };
    const addLineItem = () => {
        setLineItems([...lineItems, { productId: "", quantity: 1 }]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let clientId=selectedClient;
        
        try {
            const response = await axios.post('/api/user/invoices/createInvoice/', {clientId,lineItems});
            console.log(response.data);
            if (response.status === 201) {
                toast.success("Invoice created successfully");
                onClose()
            }
            else {
                toast.error("Check entred details ");
            }
        } catch (response) {
            toast.error(response.response.data.message)
            
        }
        
    
    };


    if (!isVisible) return null;

    return (

        <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="fixed xl:ml-[90px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-h-[100vh] max-w-[100vh]  z-50  w-full p-4  ">
            <div className="relative w-full  max-h-full ">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={() => onClose()} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Make Invoice</h3>
                        <form onSubmit={handleSubmit} className='min-w-[500PX] '>
                            <div className='mb-'>

                                <label name="name" className="block mb-2 text-sm font-medium text-gray-900"> Select a client:</label>
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleClientChange}>
                                    <option value="">Select a client</option>
                                    {clients.map((client) => (
                                        <option key={client._id} value={client._id}>
                                            {client.matricule}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {lineItems.map((lineItem, index) => (
                                <div key={index} className='mb-2 gap-6 mt-2 grid grid-cols-2'>

                                    <div>
                                        <label name="name" className="block mb-2 text-sm font-medium text-gray-900"> Select a product:</label>
                                        <select
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={(event) => handleProductChange(event, index)} // add index parameter
                                        >
                                            <option value="">Select a product</option>
                                            {products.map((product) => (
                                                <option key={product._id} value={product._id}>
                                                    {product.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='mb-2 justify-between mt-2 flex' >
                                        <div>
                                            <label name="quantity" className="block mb-2 text-sm font-medium text-gray-900">Quantity:</label>
                                            <input value={lineItem.quantity} onChange={(event) => handleQuantityChange(event, index)} type="number" name="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                                        </div><button className='mt-6' type="button" onClick={() => removeLineItem(index)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="25px" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z" /> <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" /> </g> </svg>
                                        </button>
                                    </div>

                                </div>
                            ))}
                            <button className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={addLineItem}>
                                Add Product
                            </button>
                            <div className="grid  gap-6 mb-6 md:grid-cols-2">



                            </div>
                            <div className="text-center mb-6">
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAdd