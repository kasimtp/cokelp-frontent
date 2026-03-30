import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Header() {
    return (
        <header className=" fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md x-50 supports-backdrop-filter:bg-stone-50/60 flex justify-end items-center p-4 gap-4 h-16">
            <nav className='container bg-red-000 mx-auto px-4 h-16 flex item-center justify-between'>
                logo
                <div className='text-red-600'>nav</div>
                <div className='flex item-center space-x-4'>
                    <Show when="signed-out">
                        <SignInButton mode='modal'>
                            <button className="text-orange-500  rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                                sign in
                            </button></SignInButton> 
                        <SignUpButton mode='modal'>
                            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </Show>
                    <Show when=" signed-in">
                        <UserButton />
                    </Show>
                </div>

            </nav>
        </header>

        // 26:31
    )
}