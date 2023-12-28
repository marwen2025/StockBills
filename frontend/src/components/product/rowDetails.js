import React, { useState } from 'react';

const RowDetails = ({ Serial, Name, Price, Quantity, ProductId, OpenModel, OnDelete, setProductId }) => {
  // State for current page

  // Number of items per page


  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {Serial}
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {Name}
      </th>
      <th className="px-6 py-4">{Price}</th>
      <th className="px-6 py-4">{Quantity}</th>
      <th className="px-6 space-x-4 py-4">
        <span
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
          onClick={() => {
            setProductId(ProductId);
            OpenModel(true);
          }}
        >
          Edit
        </span>
        <span
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
          onClick={() => OnDelete(ProductId)}
        >
          Delete
        </span>
      </th>
    </tr>
  );
};

export default RowDetails;