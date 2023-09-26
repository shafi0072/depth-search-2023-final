import Link from 'next/link';
import React from 'react';


const NavManus = () => {
    return (
        <div className='uppercase'>
            <ul className='flex gap-8 items-center font-semibold cursor-pointer'>
                <li>Home</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <Link href='/case-studies'>Case Studies</Link>
                <Link href='/about'>About</Link>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default NavManus;