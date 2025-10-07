import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const navLinks = <>
        <NavLink to='/' className='px-4 py-1' >Home</NavLink>
        <NavLink to='/listed-books' className='px-4 py-1' >Listed Books</NavLink>
        <NavLink to='/page-to-read' className='px-4 py-1'>Pages to Read</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 px-0 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost font-bold text-lg lg:text-3xl pl-0">Book Vibe</Link>
                </div>
                <div className="navbar-center hidden lg:flex" >
                    <ul className="menu menu-horizontal px-1 gap-4 text-lg flex items-center ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#23BE0A] text-white text-xs px-4 py-0.5 lg:px-7 lg:py-4 mr-4 rounded-lg">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white text-xs px-4 py-0.5 lg:px-7 lg:py-4 mr-4 rounded-lg">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;