import React from 'react'

function Navbar() {
  return (
   <>
   <div className='w-full  bg-black h-[70vh]'>
    <img className='w-full h-[100%] object-cover opacity-40' src="https://th.bing.com/th/id/OIP.Ufw0goKNPwhSDqI2YCWTmgHaE8?rs=1&pid=ImgDetMain" alt="" />
    <nav className='w-full text-white px-4 py-2 z-10 absolute top-1'>
        <div className='w-full flex justify-around text-xl '>
            <h3 className='mr-40 font-bold text-2xl'>ZOMATO</h3>
            
            <ul className='flex gap-10 ml-4 text-lg'>
                <li>Investor Relations</li>
                <li>Add Resturant</li>
                <li>Login </li>
                <li>Sign up</li>
            </ul>

        </div>
    </nav>

{/* search div */}
    <div className='z-10 absolute top-24 text-white w-full px-3 py-1 text-center '>
         <h2 className='text-6xl font-bold mb-4'>ZOMATO</h2>
         <p className='text-4xl mb-6'> Discover the best food & drinks in Jabalpur</p>
         <input className='w-full max-w-md py-2 px-3 rounded-xl outline-none border-none active::border active:border-2px active:border-red-500 text-black' type="text" placeholder='search for resturant, cusine or dish' />

    </div>
   </div>
   
   </>
  )
}

export default Navbar
