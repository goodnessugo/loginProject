import React from 'react'
import { MdEmail } from "react-icons/md";
import { GiPadlockOpen } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsShieldLock } from "react-icons/bs";
import GOOGLE from '../images/google.webp'
import FACEBOOK from '../images/Facebook_Logo_2023.png'
import APPLE from '../images/apple.png'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-gray-100 h-[100vh] flex items-center flex-col text-gray-500 p-5 '>

            <div className='h-15 w-15 flex mt-5 justify-center items-center text-5xl text-gray-300 rounded-full bg-gray-100 styleshadow z-20 mb-2' >
                <IoPersonCircleOutline />
            </div>


            <div className='pb-10 flex flex-col items-center text-gray-400 '>
                <h1 className='text-2xl font-bold'>Register User</h1>

            </div>

            <form action="" className='flex flex-col bg-gray-100 h-fit w-[80vw] md:w-[30vw] p-5 styleshadow rounded-3xl '>
                {/* fullname section */}
                <div className=' flex items-center gap-1 w-full styleshadow rounded-lg p-3 my-2 text-gray-500'>
                    <IoPersonCircleOutline /> <input type="text" placeholder='fullname' name='Fullname' className='outline-none text-gray-500 ' />

                </div>

                {/* email section */}
                <div className=' flex items-center gap-1 w-full styleshadow rounded-lg p-3 my-2 text-gray-500'>
                    <MdEmail /> <input type="text" placeholder='email' name='Email' className='outline-none text-gray-500 ' />

                </div>
                <div className=' flex items-center gap-1 w-full styleshadowinset rounded-lg p-3 my-3 text-gray-500'>
                    <GiPadlockOpen /> <input type="password" placeholder='Password' className='outline-none text-gray-500 ' />

                </div>



                <button className=' bg-gray-300 hover:bg-gray-600 hover:text-gray-200 ease-in-out cursor-pointer mt-2 p-4 rounded-md font-bold text-gray-800'>Create Account</button>

                <div className='flex flex-col justify-center items-center pt-5'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='text-xs'>Already a user?
                            <Link to='/'>
                                <span className='font-bold cursor-pointer'> LOGIN
                                </span>
                            </Link>

                        </h1>
                        <h1 className='text-xs'>Or register with</h1>

                    </div>


                    {/* social icons */}
                    <div className="socialMedia flex justify-center items-center gap-5 cursor-pointer">
                        <img src={GOOGLE} alt="" className='h-17' />
                        <img src={FACEBOOK} alt="" className='h-12' />
                        <img src={APPLE} alt="" className='h-13' />
                    </div>
                </div>


            </form>



            <div>

            </div>

        </div>
    )
}

export default Register