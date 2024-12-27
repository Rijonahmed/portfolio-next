import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const manuItem =
    [
        {
            title : 'About',
            path : '/about',
        },
        {
            title : 'Projects',
            path : '/projects',
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
      <div className="navbar bg-cyan-500 text-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label  className="btn btn-ghost lg:hidden">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
            </label>
            <ul  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">

              {manuItem?.map((item) => <Link key={item.path} href={item.path} >{item.title}</Link>)}

            </ul>
          </div>
          <Link href={'/'}><span><img src="https://i.ibb.co/5rY85C2/Logo-Makr-1-TLNhj-1.png" alt="logo" /></span></Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {manuItem?.map((item) => <li key={item.path}><Link href={item.path} >{item.title}</Link></li>)}

          </ul>
        </div>


      </div>

    </div >
            
        </nav>
    );
};

export default Navbar;