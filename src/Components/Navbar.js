import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='border-b-4 border-green-700 text-center fixed top-0 w-full bg-green-600'>
            <ul>
                <li className='inline-block pt-4 pb-4'>
                    <Link to="/" className="pl-6 pr-8">
                        Home
                    </Link>
                </li>
                <li className='inline-block pt-4 pb-4'>
                    <Link to="/about" className="pl-6 pr-8">
                        About
                    </Link>
                </li>
                <li className='inline-block pt-4 pb-4'>
                    <Link to="/articles-list" className="pl-6 pr-8">
                        Aticles
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
