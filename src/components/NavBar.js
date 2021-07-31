import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import { MenuIcon } from '@heroicons/react/outline'

const NavBar = ({toggle, isOpen}) => {
    return (
        <header className="bg-gray-700">
            <div className="container mx-auto flex justify-between">
                
                <nav className="flex">
                    <MenuIcon 
                        className={
                            isOpen ? 'h-8 w-8 mt-3 ml-6 mb-4 text-purple-400 md:hidden'
                            : 'h-8 w-8 mt-3 ml-6 mb-4 text-white md:hidden'
                        } 
                        onClick={toggle}/>
                    <div className='flex h-full border-opacity-100 mt-6 md:block hidden'>
                        <NavLink to="/" exact 
                            activeClassName="text-white" 
                            className="inflex-flex items-center py-6 px-5 mr-4 text-gray-100 hover:text-purple-300 text-3xl md:text-4xl font-bold cursive tracking-widest"
                        >
                            Carson
                        </NavLink>
                        <NavLink to="/post"
                            className="inflex-flex items-center py-3 px-3 my-6 text-gray-100 text-sm md:text-base hover:text-purple-300"
                            activeClassName="text-gray-100 bg-gray-500"
                        >
                            Blog Posts
                        </NavLink>
                        <NavLink to="/project"
                            className="inflex-flex items-center py-3 px-3 my-6 text-gray-100 text-sm md:text-base hover:text-purple-300"
                            activeClassName="text-gray-100 bg-gray-500"
                        >
                            Projects
                        </NavLink>
                        <NavLink to="/about"
                            className="inflex-flex items-center py-3 px-3 my-6 text-gray-100 text-sm md:text-base hover:text-purple-300"
                            activeClassName="text-gray-100 bg-gray-500"
                        >
                            About Me
                        </NavLink>
                    </div>
                    
                    
                </nav>
                <div className="inline-flex py-3 px-3 my-6 hidden md:block">
                    <SocialIcon url="https://www.linkedin.com/in/carson-richter-42362132" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}

export default NavBar
