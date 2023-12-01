import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';


const NavManus = () => {
    const router = useRouter();
    return (
        <div className='uppercase'>
            <ul className='flex gap-8 items-center font-semibold cursor-pointer'>
                <Link href='/'>Home</Link>
                <Link href='/services'>Services</Link>
                <li onClick={()=>router.push("/projects")}>Projects</li>
<<<<<<< HEAD
                <Link href='/blog'>Blog</Link>
                <Link href='/case-studies'>Case Studies</Link>
=======
                <li>Blog</li>
                {/* <Link href='/case-studies'>Case Studies</Link> */}
>>>>>>> d437fdba2086d96d8f5b5db1bf6c2d96ca9740d1
                <Link href='/about'>About</Link>
                <li onClick={()=>router.push("/contact-us")}>Contact</li>
            </ul>
        </div>
    );
};

export default NavManus;