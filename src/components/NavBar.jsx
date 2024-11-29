import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 shadow-md">
            <ul className="flex justify-center space-x-6 text-white">
                <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
                <li><Link to="/experience" className="hover:text-blue-400">Experience</Link></li>
                <li><Link to="/project" className="hover:text-blue-400">Project</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;