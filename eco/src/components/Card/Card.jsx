import React from 'react'

function Card() {
  return (

    <div className='w-full mt-10 py-1 px-3 '>
    <div className='w-[40%] h-[40vh] ml-16 bg-white rounded-xl overflow-hidden hover:scale-110 duration-200'>
        <img className='w-full h-[60%] object-cover mb-4' src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="" />
        <div className='w-full  '>
            <h3 className='text-2xl ml-4'>Order Online</h3>
            <p className='ml-4 '>Stay home and Order to your doorstap </p>
        </div>
     </div>

    </div>
  
  )
}

export default Card
