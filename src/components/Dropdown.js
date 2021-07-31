import React from 'react'
import { NavLink } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={
            isOpen 
                ? 'grid grid-rows-4 text-center bg-gray-700' 
                : 'hidden'}
            onClick={toggle}
        >
            <NavLink to="/" exact 
                activeClassName="text-white" 
                className="inflex-flex items-center py-4 px-5 text-gray-100 hover:text-purple-300 text-4xl md:text-4xl font-bold cursive tracking-widest"
            >
                Carson
            </NavLink>
            <NavLink to="/post"
                className="inflex-flex items-center py-1 px-3 my-6 text-gray-100 text-2xl hover:text-purple-300"
                activeClassName="text-gray-100 bg-gray-500"
            >
                Blog Posts
            </NavLink>
            <NavLink to="/project"
                className="inflex-flex items-center py-1 px-3 my-6 text-gray-100 text-2xl hover:text-purple-300"
                activeClassName="text-gray-100 bg-gray-500"
            >
                Projects
            </NavLink>
            <NavLink to="/about"
                className="inflex-flex items-center py-1 px-3 my-6 text-gray-100 text-2xl hover:text-purple-300"
                activeClassName="text-gray-100 bg-gray-500"
            >
                About Me
            </NavLink>
        </div>
    )
}

export default Dropdown
