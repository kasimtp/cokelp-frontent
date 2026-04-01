import { Show, SignInButton, SignUpButton } from '@clerk/nextjs'
import { Cookie, RefrigeratorIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import UserDropdown from '../UserDropdown'

const Header = () => {
    return (
        <header className=" fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md x-50 supports-backdrop-filter:bg-stone-50/60 flex justify-end items-center p-4 gap-4 h-16">
            <nav className='container bg-red-000 mx-auto px-4 h-16 mt-8 flex items-center justify-between'>
                <Link href="{user ? '/dashboard' : '/'}">
                    <div className='text-red-600'><p className='font-bold text-lg'>cokhelp</p></div>
                </Link>
                <div className='hidden md:flex  items-center space-x-8 text-sm font-medium'>
                    <Link href="/recipes" className='hover:text-orange-600 transition-colors flex gap-1.5 items-center'>
                       <Cookie className='w-4 h-4'/>
                        My Recipes
                    </Link>
                    <Link href="/pantry" className='hover:text-orange-500 transition-colors flex gap-1.5 items-center'>
                        <RefrigeratorIcon className='w-4 h-4'/>
                        My Pantry
                    </Link>
                      </div>
                 
              
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
                    <Show when="signed-in">
                         <UserDropdown/>
                        
                    </Show>
                </div>

            </nav>
        </header>

    )
}

export default Header;