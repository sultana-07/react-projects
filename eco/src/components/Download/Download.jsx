import React from 'react'

function Download() {
  return (
    <div className='w-full flex mt-36 '>
        <div className='w-[50%] flex justify-center'>
            <img className='w-[300px] ml-72 mt-8' src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt="" />
        </div>

        <div className='w-[50%]  px-2 py-1'>
            <h2 className='text-5xl mb-4 mt-5'>Get the Zomato app</h2>
            <p>We will send you a link, open it on your phone to download  </p>
            
            <p>the app</p>
            <div className='w-[260px]   text-xl mt-6'>
                  
            <input className='text-xl' type="radio" />
            <label>E-mail</label>

            <input className='ml-20' type="radio" />
            <label>phone</label>
            </div>

            <div className='mt-5 flex '>
                <div>
                    <select name="+91"  className='outline-none border-none py-2 px-2' >
                        <option value="+91">+91</option>
                        <option value="+92">+92</option>
                        <option value="+1">+1</option>
                        <option value="+66">+66</option>
                        <option value="+55">+55</option>
                    </select>
                    <input className='outline-none border-none py-2 px-2'  type="text" placeholder='enter your number' />
                </div>

                <button className='py-2 px-6 ml-4 bg-red-500 text-white '>Share</button>
            </div>

            <p className='mt-7'>Download app from</p>

            <div className='mt-3 flex '>
                <div className='w-[20%] bg-red-500'>
                    <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                </div>

                <div className='w-[20%] bg-red-500 ml-6'>
                    <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Download
