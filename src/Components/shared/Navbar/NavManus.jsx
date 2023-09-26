import { useRouter } from 'next/router';
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
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default NavManus;