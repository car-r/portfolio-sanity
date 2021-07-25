import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
    return (
        <header className="bg-gray-700">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                        activeClassName="text-white" 
                        className="inflex-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-purple-300 text-4xl font-bold cursive tracking-widest"
                    >
                        Carson
                    </NavLink>
                    <NavLink to="/post"
                        className="inflex-flex items-center py-3 px-3 my-6 text-gray-100 hover:text-purple-300"
                        activeClassName="text-gray-100 bg-gray-500"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"
                        className="inflex-flex items-center py-3 px-3 my-6 text-gray-100 hover:text-purple-300"
                        activeClassName="text-gray-100 bg-gray-500"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                        className="inflex-flex items-center py-3 px-3 my-6 text-gray-100 hover:text-purple-300"
                        activeClassName="text-gray-100 bg-gray-500"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/carson-richter-42362132" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}

export default NavBar
