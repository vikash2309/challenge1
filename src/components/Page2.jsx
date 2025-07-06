import React from 'react'

const Page2 = () => {
  return (
    <div className='flex flex-col  items-center justify-center gap-1  p-3 lg:p-10 my-12 mx-8'>
        <span className='text-sky-500 text-[12px] w-[90%] cursor-pointer'>Welcome to BriskPay</span>
        <div className='flex md:flex-row gap-8 w-[90%] items-center justify-center flex-col'>
            <div className='text-black text-4xl font-bold lg:w-[60%] w-[100%]'>We're here to help you to take control of your money and turn <span className='text-gray-400'>your dreams into reality</span></div>
            <div className='text-black   font-light text-[13px] lg:w-[40%] w-[100%]'>Our mission is to make banking fun, easy, and smart. With cutting-edge tools, no hidden fees, and support every step of the way, we're empowering the next generation of financial leaders. At BriskPay, you're not just a customer - you're a partner in building a brighter, more financially confident future.</div>

        </div>
        
            <img src="./image-2.jpg" alt="" className='w-[90%] rounded-3xl my-10' />

        









    </div>
  )
}

export default Page2