import React from 'react';
import Container from './Container';
import Image from 'next/image';

const Product = async() => {
      const data = await fetch('https://dummyjson.com/products')
  const products = await data.json()

    return (
        <div>
         <Container>
              
           <div className='grid grid-cols-4 pt-20  gap-10'>
              {
                products.products.map((product,id)=>(
                    <div key={product.id} className="border p-5 border-amber-400 rounded-xl">
                        <Image className='bg-gray-400 mx-auto rounded-lg' src={product.thumbnail}  alt="Picture of the product" width={200} height={200}></Image>
                        <h1 className='text-lg'>{product.title}</h1>
                        <p className='pb-5'>${product.price}</p>
                        <button className=' px-12 duration-200 hover:bg-yellow-400 py-2 border rounded-xl'>Details</button>
                    </div>

                ))
             }
           </div>
         </Container>
        </div>
    );
};

export default Product;