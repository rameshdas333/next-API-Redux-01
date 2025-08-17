"use client"
import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { addToCart } from '../lib/slice/cartSlice';
import { useAppDispatch } from '../lib/hooks';

const Productpage = () => {
  // const data = await fetch('https://dummyjson.com/products')
  // const products = await data.json()

  const disPatch = useAppDispatch()
    const [productData,setProductData]= useState([])
  
    useEffect(()=>{
      const fetchData = async() =>{
    const data = await fetch('https://dummyjson.com/products')
    const products = await data.json()
    setProductData(products.products)
      }
      fetchData()
    },[])
    console.log(productData)

    const handleAddToCart = (product)=>{
      console.log("cart ram",product)
      disPatch(addToCart(product))
    }
    return (
        <div >
           <Container>
        <div className='flex pt-20 '>
              <div className='w-[30%]'>
              Category List
              {
                productData.map(product => <div key={product.id}>
                  <h1>{product.category}</h1>
                </div>)
              }
            </div>
              
         <div className='w-[70%]'>
            <div className='grid grid-cols-3  gap-10'>
              {
                productData.map((product,id)=>(
                    <div key={product.id} className="border p-5 border-amber-400 rounded-xl">
                        <Image className='bg-gray-400 mx-auto rounded-lg' src={product.thumbnail} width={200} height={200} alt={product.title} priority /> 
                        <h1 className='text-lg'>{product.title}</h1>
                        <p className='pb-5'>${product.price}</p>

                    
                       
                      <div className='flex justify-between items-center'>
                          <Link href={`/product/${product.id}`} className=' px-12 duration-200 hover:bg-yellow-400 py-2 border bg-green-400 text-white'>Details</Link>
                        
                        <Link onClick={()=>handleAddToCart(product)} href={`/cart`} className=' px-12 duration-200 hover:bg-yellow-400 py-2 border bg-green-400 text-white'>Add to Cart</Link>
                      </div>
                         
                    </div>

                ))
             }
           </div>
         </div>
        </div>
         </Container>
        </div>
    );
};

export default Productpage;