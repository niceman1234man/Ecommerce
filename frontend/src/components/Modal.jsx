import React from 'react'

function Modal({isModalOpen,setIsModalOpen,children}) {
    if(!isModalOpen) return null;
  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50'>
        <div className='bg-white rounded-lg shadow-lg p-6 w-full mx-w-md '>
            <button className='absolute top-4 right-4 text-gray-500 text-3xl' onClick={()=>setIsModalOpen(false)}>&times;</button>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default Modal