import React from 'react'
import { FaShippingFast,FaHeadset,FaMoneyBillWave,FaLock,FaTag } from 'react-icons/fa'
function InfoSection() {
    const info=[
                 {
            icon:<FaShippingFast className='text-3xl text-red-600'/>,
            title:"Free Shipping",
            description:"Get your deliver with out extra cost"

                }
            ,   {
                icon:<FaHeadset className='text-3xl text-red-600'/>,
                title:"Support",
                description:"We are here to assist you anytime"
    
            },   {
                icon:<FaMoneyBillWave className='text-3xl text-red-600'/>,
                title:"100% money back",
                description:"Fully refund if you are not satisfied"
    
            },   {
                icon:<FaLock className='text-3xl text-red-600'/>,
                title:"Payment secure",
                description:"Your payment information is secure with us"
    
            }
            ,   {
                icon:<FaTag className='text-3xl text-red-600'/>,
                title:"Discount",
                description:"Enjoy the best price on our product"
    
            }
    ]

  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {
                info.map((item,index)=>(
                 <div key={index} className=' flex flex-col items-center text-center border rounded-lg shadow-lg transform 
                 transition-transform duration-300 hover:scale-105 cursor-pointer px-3 py-3' >
                    {
                    item.icon
                    }
                    <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                    <p className='mt-2 text-gray-600'>{item.description}</p>

                 </div>
                ))
            }
        </div>
    </div>
  )
}

export default InfoSection