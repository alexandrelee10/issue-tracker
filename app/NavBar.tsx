'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillBug } from 'react-icons/ai';
import classnames from 'classnames';

const NavBar = () => {
    // Only able to access pathname and browser components on client side
    const currentPath = usePathname();
    
    // Define navigation links
    const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];
  // Render navigation bar
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/"><AiFillBug className='text-xl' /></Link>

      <ul className='flex space-x-6'>
        {links.map(link => (
          <li key={link.href}>
            <Link 
              href={link.href} 
              className={classnames({
                'text-zinc-900 font-bold': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
