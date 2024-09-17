import React from 'react'

function Menu({title, price, img}) {
  return (
     <div className='w-[17%] h-[40vh] border border-2px border-black p-1 rounded-lg overflow-hidden hover:scale-110 duration-300 cursor-pointer'>
        <img className='w-[100%] h-[60%] object-cover' src={img} alt="" />

        <div className='w-full flex flex-col items-center'>
            <h3 className='text-xl font-bold mt-2 '>{title}</h3>
            <p>{price}</p>
        </div>
     </div>
  )
}

export default Menu
