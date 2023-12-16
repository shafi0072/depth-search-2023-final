import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';


const NavManus = () => {
    const router = useRouter();
    return (
        <div className='uppercase'>
            <ul className='flex gap-8 items-center font-semibold cursor-pointer'>
                <Link className={`hover:text-blue-500 ${router.pathname === '/' && 'text-blue-500'}`} href='/'>Home</Link>
                <Link className={`hover:text-blue-500 ${router.pathname === '/services' && 'text-blue-500'}`} href='/services'>Services</Link>
                <li className={`hover:text-blue-500 ${router.pathname === '/projects' && 'text-blue-500'}`} onClick={() => router.push("/projects")}>Projects</li>
                {/* <<<<<<< HEAD */}
                
                {/* <Link href='/case-studies'>Case Studies</Link> */}
                {/* ======= */}
                <Link className={`hover:text-blue-500 ${router.pathname === '/blog' && 'text-blue-500'}`} href='/blog'>Blog</Link>
                <Link className={`hover:text-blue-500 ${router.pathname === '/case-studies' && 'text-blue-500'}`} href='/case-studies'>Case Studies</Link>
                {/* >>>>>>> 5def482b69b73dcb644b86a87ad133ba06ecce57 */}
                <Link className={`hover:text-blue-500 ${router.pathname === '/about' && 'text-blue-500'}`} href='/about'>About</Link>
                <li className={`hover:text-blue-500 ${router.pathname === '/contact-us' && 'text-blue-500'}`} onClick={() => router.push("/contact-us")}>Contact</li>
            </ul>
        </div>
    );
};

export default NavManus;