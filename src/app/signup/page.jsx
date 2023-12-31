import Image from 'next/image'
import React from 'react'

const signup = () => {
    return (
        <main className=' bg-[#EBEDF0] h-screen min-h-screen'>
            <div className="w-full md:max-w-xl 2xl:max-w-4xl mx-auto flex flex-col p-8 md:p-[38px] lg:px-18 lg:py-8 justify-center items-center">
                <Image src={'/marvelsitep-logo.png'} width={200} height={200} alt='marvelsite-logo' />
                <div
                    className="flex 2xl:mt-96 md:bg-white md:rounded-lg md:shadow-xl flex-col items-center justify-center md:p-8 w-full">
                    <div className="mb-6">
                        <h1 className="font-semibold text-xl leading-9">Create Account</h1>
                        <p className="text-xs text-[#C6C8CD]">Enter the fields below to get started.</p>
                    </div>
                    <form className="w-full flex flex-col gap-3">
                        <div>
                            <input type="text" className='p-3 rounded-md border-2 hover:border-blue-400 focus:border-blue-400' />
                            {/* <TextField className='w-full p-1' style={{ padding: '2px' }} id="filled-basic" label="Full name" variant="filled" /> */}
                        </div>
                        <div>
                            {/* <TextField className='w-full p-1' style={{ padding: '2px' }} id="filled-basic" label="Email" variant="filled" /> */}
                        </div>
                        <div>
                            {/* <TextField className='w-full p-1' style={{ padding: '2px' }} id="filled-basic" label="Password" variant="filled" /> */}
                        </div>
                        <button className='text-center bg-blue-700 w-full text-white py-3 md:px-5 px-8 rounded-md hover:bg-blue-600 transition-all ease-in duration-300 mt-2 focus:outline-none font-normal mt-2'>Create Account</button>
                        <hr className="mt-6 mb-3" />
                        <p className="text-center">
                            <Link href='/' className="text-sm font-medium text-blue-700 hover:underline b-0"> Already have an account?
                                Signin instead</Link>
                        </p>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default signup