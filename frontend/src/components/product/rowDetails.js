
import React from 'react'

const RowDetails=({Serial,Name,Price,Quantity,ProductId,OpenModel,OnDelete,setProductId})=> {

  return (
    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {Serial}
                    </th>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {Name}
                    </th>
                    <th class="px-6 py-4">
                        {Price}
                    </th>
                    <th class="px-6 py-4">
                        {Quantity}
                    </th>
                    <th class="px-6 space-x-4 py-4">
                    <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"onClick={()=>{setProductId(ProductId);OpenModel(true);}} >Edit</span  >
                        <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer" onClick={()=>OnDelete(ProductId)}>Delete</span  >
                    </th>
                </tr>
  )
}

export default RowDetails