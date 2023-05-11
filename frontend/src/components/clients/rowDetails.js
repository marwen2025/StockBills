import React from 'react'

function rowDetails({Matricule,Name,FirstName,EMmail,Id,PhoneNumber,OnDelete,OpenModel,setClientId}) {
  return (
    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {Matricule}
                    </th>
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {Name}
                    </td>
                    <td class="px-6 py-4">
                        {FirstName}
                    </td>
                    <td class="px-6 py-4">
                        {EMmail}
                    </td>
                    <td class="px-6 py-4">
                        {PhoneNumber}
                    </td>
                    <td class="px-6 space-x-4 py-4">
                    <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"onClick={()=>{{OpenModel(true)}; setClientId(Id);}} >Edit</span  >
                        <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer" onClick={()=>{OnDelete(Id)}}>Delete</span  >
                        
                    </td>
                </tr>
  )
}

export default rowDetails