import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Modal = ({ isVisible, onClose, invoiceId }) => {
const [invoice, setInvoice] = useState();
const [clientN, setClientN] = useState();
const [userN, setUserN] = useState();
const [lineList, setLineList] = useState();

useEffect(() => {
  let isMounted = true;
  const getInvoice = async () => {
    try {
      const { data } = await axios.get(`/api/user/invoices/getInvoice/${invoiceId}`);
      if (isMounted) {
        setInvoice(data);
        setClientN(`${data.clientId.name} ${data.clientId.firstname}`);
        setUserN(data.userId.name);
        setLineList(data.lineList);
      }
    } catch (error) {
      console.error(error);
    }
  };
  getInvoice();
  return () => {
    isMounted = false;
  };
}, [invoiceId]);


    if (!isVisible) return null;
    return (

        <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="fixed xl:ml-[90px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-h-[100vh] max-w-[100vh]  z-50  w-full p-4  ">
            <div className="relative w-full  max-h-full ">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={() => onClose()} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8 text-center flex-col">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Invoice</h3>
                        <div class="flex justify-between p-4 bg-white">
                            <div>
                                <h6 class="font-bold">Order Date : <span class="text-sm font-medium"> {invoice.createdAt}
                                </span></h6>
                                <h6 class="font-bold">Invoice ID : <span class="text-sm font-medium"> {invoice._id}</span></h6>
                            </div>
                            <div class="w-40">
                                <address class="text-md">
                                    <span class="font-bold"> Client : </span>
                                    {clientN}
                                </address>
                            </div>
                            <div class="w-40">
                                <address class="text-md">
                                    <span class="font-bold">User :</span>
                                    {userN}
                                </address>
                            </div>
                            <div></div>
                        </div>
                        <div class="relative bg-white flex justify-center p-4">

                            <div class="border-b border-gray-200 shadow">
                                <table className="">
                                    <thead className="bg-gray-500">
                                        <tr>
                                            <th className="px-4 py-2 text-xl text-gray-50 ">
                                                #
                                            </th>
                                            <th className="px-4 py-2 text-xl text-gray-50 ">
                                                Product Name
                                            </th>
                                            <th className="px-4 py-2 text-xl text-gray-50 ">
                                                Quantity
                                            </th>
                                            <th className="px-4 py-2 text-xl text-gray-50 ">
                                                Unite Price
                                            </th>
                                            <th className="px-4 py-2 text-xl text-gray-50 ">
                                                Subtotal
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {lineList &&
                                            lineList.map((line, index) => (
                                                <tr key={line._id} className="whitespace-nowrap">
                                                    <td className="px-6 py-4 text-sm text-gray-500">{index + 1}</td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm text-gray-900">{line.name}</div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm text-gray-500">{line.quantity}</div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{line.unitPrice}</td>
                                                    <td className="px-6 py-4">{line.quantity * line.unitPrice}</td>
                                                </tr>
                                            ))}
                                        <tr className="text-white bg-gray-500">
                                            <th colspan="3"></th>
                                            <td className="text-2xl font-bold">
                                                <b>Total</b>
                                            </td>
                                            <td className="font-bold text-2xl">
                                                <b>{invoice ? invoice.total : 0} TND</b>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                                <span className="">
                                    stock and Bills ©
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal