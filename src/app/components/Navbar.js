import Link from 'next/link';
import React from 'react';
import Container from './Container';

const Navbar = () => {
    return (
      <nav>

     <Container>
            <div className='flex items-center justify-between px-5 py-2 bg-teal-500 text-white '>
              <div>
            Logo
           </div>
           <div>
             <ul className='flex space-x-10 items-center'>
                <li className='font-bold'><Link href="/">Home</Link></li>
                <li className='font-bold'><Link href={`/product`}>Product</Link></li>
                <li className='font-bold'><Link href={``}>Blog</Link></li>
                <li className='font-bold'><Link href={``}>Service</Link></li>
                <li className='font-bold'><Link href={`/cart`}>Cart</Link></li>
                <li className='font-bold'><Link href={``}>Contact</Link></li>
            </ul>
           </div>
         </div>
     </Container>
      </nav>
    );
};

export default Navbar;