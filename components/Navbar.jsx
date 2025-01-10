import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const manuItem =
    [
        {
            title : 'Home',
            path : '/',
        },
        {
            title : 'About',
            path : '/about',
        },
        {
            title : 'Education',
            path : '/education',
        },
        {
            title : 'Contact Us',
            path : '/contact',
        },
        {
            title : 'Blog',
            path : '/blog',
        },
    ]
    {/* <li><Link to='/home'>Home</Link></li>
    <li><Link to='/resume'>Resume</Link></li>
    <li><Link to='/about'> About</Link></li>
    <li><Link to='/contactME'>Contact Me</Link></li>
    <li><Link to='/projects'>Projects</Link></li>
    <li><Link to='/education'>Education</Link></li>
    <li><Link to='/blog'>Blog</Link></li> */}

  
    return (
        <nav>
            <div className='sticky top-0 z-10'>
      <div className="flex justify-between items-center bg-cyan-500 text-base-100 ">
        <div className="navbar-start">
          <Link href={'/'}><span><img src="https://i.ibb.co/5rY85C2/Logo-Makr-1-TLNhj-1.png" alt="logo" /></span></Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex justify-center items-center">
          {manuItem?.map((item) => <li className='p-10' key={item.path}><Link href={item.path} >{item.title}</Link></li>)}

          </ul>
        </div>


      </div>

    </div >
            
        </nav>
    );
};

export default Navbar;