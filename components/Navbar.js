"use client";
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState } from 'react';
// import { useUser } from '@clerk/nextjs';

const Navbar = () => {
  // const user = useUser();
  // console.log(user.user?.id);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold font-serif">
              PieChat
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/forums" className="hover:text-gray-400">
                Forums
              </Link>
            </li>
            {/* <li>
              <Link href="/chat" className="hover:text-gray-400">
                UserChat
              </Link>
            </li> */}
            <li>
                <UserButton/>
            </li>

          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <ul className="space-y-2 px-4 py-3 text-lg font-light">
            <li>
              <Link href="/" className="block px-3 py-2 rounded-md hover:bg-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/forums" className="block px-3 py-2 rounded-md hover:bg-gray-600">
                Forums
              </Link>
            </li>
            {/* <li>
              <Link href="/contact" className="block px-3 py-2 rounded-md hover:bg-gray-600">
                Contact
              </Link>
            </li> */}
            <li>
                <UserButton/>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
