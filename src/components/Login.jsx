import React from 'react'
import { MdEmail } from "react-icons/md";
import { GiPadlockOpen } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";

const Login = () => {
    return (
        <div className='bg-gray-100 h-[100vh] flex flex-col justify-center items-center'>

            <div className='h-20 w-20 flex justify-center items-center text-9xl text-gray-300 rounded-full bg-gray-100 styleshadowinset z-20 mb-5 ' >
                <IoPersonCircleOutline />
            </div>
            <form action="" className='flex flex-col bg-gray-100 h-fit w-[80vw] md:w-[30vw] p-10 styleshadow rounded-3xl '>
                <div className=' flex items-center gap-2 w-full styleshadow rounded-lg p-3 my-2 text-gray-500'>
                    <MdEmail /> <input type="text" placeholder='email' name='Email' className='outline-none text-gray-500 ' />

                </div>
                <div className=' flex items-center gap-2 w-full styleshadowinset rounded-lg p-3 my-2 text-gray-500'>
                    <GiPadlockOpen /> <input type="password" placeholder='Password' className='outline-none text-gray-500 ' />

                </div>
            </form>
        </div>
    )
}

export default Login