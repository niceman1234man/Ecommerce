import React from 'react'

function CatagorySection() {
    const catagory=[
        {
            title:"Men",
            imageUrl:""
        },
        {
            title:"Women",
            imageUrl:""
        },
        {
            title:"Kids",
            imageUrl:""
        }
    ]
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-3 gap-6 '>
        {
            catagory.map((item,index)=>(
                <div key={index} className='relative h-24  transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    <img src={item.imageUrl} alt="" className='w-full h-full rounded-lg shadow-md' />
                    <div className='absolute top-10 left-12'>
                        <p className='text-xl font-bold'>{item.title}</p>
                        <p className='text-gray-600'>view all</p>
                    </div>
                 
                </div>
            ))
        }
       
    </div>
  )
}

export default CatagorySection