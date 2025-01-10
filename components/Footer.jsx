import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
           <footer className="bg-gray-800 text-gray-200">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <h3 className="text-lg font-bold text-white">Rijon Ahmed</h3>
            <p className="mt-4 text-sm">
              Empowering businesses with innovative web solutions. Reach out to us anytime for collaboration or support.
            </p>
          </div>
          {/* Links */}
          <div>
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                 Services
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="font-medium">Email:</span> support@yourcompany.com
              </li>
              <li>
                <span className="font-medium">Phone:</span> +123 456 7890
              </li>
              <li>
                <span className="font-medium">Address:</span> 123 Web Street, City, Country
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 flex justify-between items-center">
          <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" passHref>
            
                Facebook
              
            </Link>
            <Link href="https://twitter.com" passHref>
              
                Twitter
              
            </Link>
            <Link href="https://linkedin.com" passHref>
        
                LinkedIn
           
            </Link>
          </div>
        </div>
      </div>
    </footer>
            
        </>
    );
};

export default Footer;