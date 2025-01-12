import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

function ProductCart(product) {
  const dispatch=useDispatch();
  const handleAddtoCart=(e,product)=>{
   e.stopPropagation();
   e.preventDefault();
   dispatch(addToCart(product));
   alert('Product Added Sucessfully')
  }
  
  
 
  return (
    <Link to={`/produc-detail/${product.id}`}>
    <div key={product.id} className='relative shadow rounded p-4 bg-white transform transition-transform duration-300 hover:scale-105 px-3 py-1'>
        <img src={product.image} alt="" className='w-full h-48 object-contain mb-4'/>
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-500'>${product.price}</p>
        <div className='flex items-center mt-2'>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
        </div>
        <div className='absolute bottom-4 right-2 flex items-centerw-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700  transition-all cursor-pointer'
        onClick={(e)=>handleAddtoCart(e,product)}>
            <span className='group-hover:hidden p-1'>+</span>
            <span className='hidden group-hover:block p-1'>Add to Cart</span>
        </div>
    </div>
    </Link>
  )
}

export default ProductCart