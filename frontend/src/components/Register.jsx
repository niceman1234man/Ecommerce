import React from 'react'

function Register(loginOpen) {
  return (
    <div>
    <h2  className='text-2xl font-bold mb-4'>Sign Up</h2>
   <form >
   <div className='mb-4'>
        <label htmlFor="" className='block text-gray-700'>Name</label>
        <input type="text" name="" id=""  className='w-full px-3 py-2 border'
        placeholder='Enter Name'/>
    </div>
    <div className='mb-4'>
        <label htmlFor="" className='block text-gray-700'>Email</label>
        <input type="email" name="" id=""  className='w-full px-3 py-2 border'
        placeholder='Enter Email'/>
    </div>
    <div>
        <label htmlFor="" className='block text-gray-700'>Password</label>
        <input type="password" name="" id=""  className='w-full px-3 py-2 border' placeholder='Enter Password'/>
    </div>
   
    <div className='mb-4'>
       <button type='submit' className='w-full bg-red-600 text-white py-2'>Sign Up</button> 


    </div>
   </form>
   <div className='text-center'>
   <span className='text-gray-700 '>
Already have an account
   </span>
   <button className='text-red-800' onClick={()=>loginOpen()}>Login</button>
   </div>
</div>
  )
}

export default Register