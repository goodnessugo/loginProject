import React from 'react'

const Login = () => {
    return (
        <div className='bg-gray-100 h-[100vh] flex justify-center items-center'>


            <form action="" className='flex flex-col bg-gray-100 h-fit p-10 styleshadow rounded-3xl '>
                <input type="text" placeholder='email' name='Email' className='w-[70vw] styleshadow rounded-lg p-3 my-2 outline-none text-gray-500' />
                <input type="password" placeholder='Password' />
            </form>
        </div>
    )
}

export default Login