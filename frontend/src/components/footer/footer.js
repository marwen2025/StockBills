import React from 'react'

const footer = () => {
    return (
        <div>
            <footer className="p-4 bg-white rounded-lg shadow md:flex  items-center md:justify-between md:p-6 ">
                <span className="text-sm text-gray-500 sm:text-center ">© 2023 <a href="https://flowbite.com/" className="hover:underline">StockBills</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default footer