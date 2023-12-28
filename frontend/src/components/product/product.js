import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RowDetails from './rowDetails';
import Modal from './Modal';
import ModalEdit from './ModalEdit';
import { Toaster, toast } from 'react-hot-toast';

const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [test, setTest] = useState();
  const [productId, setProductId] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust as needed

  const OnDelete = (_id) => {
    if (window.confirm('Are you sure to delete this Product')) {
      axios.delete(`/api/user/products/deleteProduct/${_id}`).then((res) => {
        if (res.status === 200) {
          toast.success('Removed successfully');
          setTest((prevState) => !prevState);
        } else {
          toast.error('Error');
        }
      });
    }
  };

  useEffect(() => {
    async function checkLoggedIn() {
      const response = await axios.get('/api/users/loggedin');
      if (response.data !== true) {
        navigate('/login');
      }
    }
    checkLoggedIn();
  }, [navigate]);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/user/products/getProducts').then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, [showModalEdit, showModal, test]);

  useEffect(() => {
    // Filter products based on search query
    const filtered = products.filter(
      (product) =>
        product.serial.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset current page when the search query changes
  }, [searchQuery, products]);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filteredProducts.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <Navbar />
      <div className='xl:ml-[256px] pt-4 px-14'>
        <h1 className=' text-2xl font-bold border-indigo-900 border-b-2'> Products :</h1> 
      </div>
      
      <div className=' xl:ml-[256px] pt-4 px-14 flex flex-row items-center justify-between pr-12 pt-8'>
      <input
          type='text'
          placeholder='Search by name or serial'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='py-2 px-7 border border-gray-300 rounded-md'
/>
        <button
          onClick={() => setShowModal(true)}
          type='button'
          className='flex-col flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          <svg width='30px' height='20px' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='#ffffff'>
            <path d='M14 7v1H8v6H7V8H1V7h6V1h1v6h6z' />
          </svg>
          Add
        </button>
        
      </div>

      <div className='xl:ml-[256px] pt-4 px-14'>
        <ModalEdit isVisible={showModalEdit} productId={productId} onClose={() => setShowModalEdit(false)} />

        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />

        <div className='overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Product Serial
                </th>
                <th scope='col' className='px-6 py-3'>
                  Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Price
                </th>
                <th scope='col' className='px-6 py-3'>
                  Quantity
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map(({ serial, name, price, quantity, _id }) => (
                <RowDetails
                  key={_id}
                  setProductId={setProductId}
                  OpenModel={setShowModalEdit}
                  Serial={serial}
                  OnDelete={OnDelete}
                  Name={name}
                  Price={price}
                  Quantity={quantity}
                  ProductId={_id}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className='mt-4 flex justify-end'>
          <button
            onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={currentPage === 1}
            className='mr-2'
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className='ml-2'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
