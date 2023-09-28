import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';


const NavManus = () => {
    const router = useRouter();
    return (
        <div className='uppercase'>
            <ul className='flex gap-8 items-center font-semibold cursor-pointer'>
                <li onClick={()=>router.push("/")}>Home</li>
                <li>Services</li>
                <li onClick={()=>router.push("/projects")}>Projects</li>
                <li>Blog</li>
                <Link href='/case-studies'>Case Studies</Link>
                <Link href='/about'>About</Link>
                <li onClick={()=>router.push("/contact-us")}>Contact</li>
            </ul>
        </div>
    );
};

export default NavManus;