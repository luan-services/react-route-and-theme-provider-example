import React from 'react'
import { Outlet } from 'react-router'
import { NavLink, useLocation } from 'react-router'

const Layout = () => {

    const location = useLocation();

  return (
    <div className='w-full min-h-screen flex flex-col items-center'>

        <div>
            This is the Page Layout, we use link components bellow to go to other pages.
        </div>

        <div className='flex items-center justify-between font-medium gap-2'>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-black"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? "text-red-700" : "text-black"
                }
            >
                About
            </NavLink>
        </div>

        <div className='w-full p-2 items-center flex flex-col border-b'>
            <span>We are currently using useLocation() State to tell us the current path we are at is:</span>
            <span className='text-blue-700'>{location.pathname}</span>
            <span>Anything below this line is being rendered by the current selected page.</span>
        </div>

        <main className='w-full flex p-4'>
            <Outlet/> {/* Outlet is like {Children} for react-router, it will render the pages */}
        </main>
    </div>
  )
}

export default Layout
