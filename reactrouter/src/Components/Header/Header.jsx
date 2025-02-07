import React from 'react'
import { Link, NavLink } from 'react-router'
function Header() {
    return (
        <>
            <nav className='h-14  flex justify-between items-center bg-white'>
                <Link to='/'>
                    <img
                        className='w-28'
                        p-2
                        src="https://zemez.io/html/wp-content/uploads/sites/9/2018/01/logo.png" alt="logo" />
                </Link>
                <div>
                    <ul className='flex'>
                        <li>
                            <NavLink to='/' className={({ isActive }) =>
                                `p-2 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 `
                            }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='about' className={({ isActive }) =>
                                `p-2  ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                            }>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='contact' className={({ isActive }) =>
                                `p-2  ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                            }>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='github' className={({ isActive }) =>
                                `p-2  ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                            }>
                                Github
                            </NavLink>
                        </li>
                        

                    </ul>
                </div>
                <div>
                    <Link to='/' className='p-2'>Log in</Link>
                    <Link to='contact' className='p-2 bg-red-500 text-white rounded-md'>Get Started</Link>
                </div>
            </nav>
            <hr />
        </>
    )
}

export default Header