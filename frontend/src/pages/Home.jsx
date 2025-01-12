import React,{useEffect} from 'react'
import { catagories } from '../assets/mockDta.js'
import InfoSection from '../components/InfoSection.jsx'
import CatagorySection from '../components/CatagorySection.jsx'
import { useDispatch,useSelector } from 'react-redux'
import { mockdata } from '../assets/mockDta.js'
import { setProducts } from '../redux/ProductSlice.jsx'
import ProductCart from '../components/ProductCart.jsx'
import Shop from './Shop.jsx'

function Home() {
    const dispatch=useDispatch();
    const products=useSelector(state=>state.product);
    useEffect(()=>{
    dispatch(setProducts(mockdata));
    },[]);
  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24 py-4'>
        <div className='container mx-auto flex flex-col md:flex-row py-4 space-x-2'>
            <div className='w-full md:w-3/12'>
                <div className='bg-red-500 text-white text-xs px-2 py-2.5 font-bold'>
                    SHOP BY CATAGORIES
                </div>
                {console.log(products)}
                 <ul className='space-y-4 bg-gray-100 border p-3'>
                    {
                        catagories.map((catagory,index)=>(
                            <li key={index} className='flex items-center text-sm font-medium'>
                                <div className='h-2 w-2 rounded-full mr-2 border border-red-500'></div>
                           {catagory}
                            </li>
                        ))
                    }
                 </ul>
                </div>
                <div className='w-full relative md:w-9/12 mt-8 md:mt-0 h-96'>
                    <img src="" alt="" className='h-full w-full '/>
                    <div className='absolute top-16 left-8'>
                        <p className='text-lg font-bold p-2'>WELLCOME TO e-SHOP</p>
                        <p className='text-sm font-medium '>MELLION+ PRODUCT</p>
                        <button className='bg-red-600 transform transition-transform duration-300 hover:scale-105 px-3 py-1'>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <InfoSection/>
            <CatagorySection/>
            <div className='contaner mx-auto py-12'>
                <h2 className='text-2xl font-bold mb-6 text-center'>Top Product</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                    {
                   products.products.slice(0,5).map((product)=>(
                   <ProductCart product={product}/>
                   ))
                    }
                </div>
            </div>
        </div>
        <Shop/>
        </div>

  )
}

export default Home