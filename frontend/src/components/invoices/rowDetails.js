import axios from 'axios';
import React, { useEffect, useState } from 'react'


function RowDetails({onDelete,_id,clientId,total,OpenModel,setInvoiceId}) {
    const[clientName,setClientName]=useState();
    useEffect(()=>{
        axios.get(`/api/user/clients/getClient/${clientId}`).then(res=>{
            setClientName(res.data.name+" "+res.data.firstname)
        })
        
    },[])

  return (
    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {_id}
                    </th>
                    
                    <td class="px-6 py-4">
                        {clientName}
                    </td>
                    <td class="px-6 py-4">
                        {total} TND
                    </td>
                    <td class="px-6 space-x-4 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>{OpenModel(true);setInvoiceId(_id)}}>Show</a>
                        <a href="#" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>{onDelete(_id)}}>Delete</a>
                    </td>
                </tr>
  )
}

export default RowDetails