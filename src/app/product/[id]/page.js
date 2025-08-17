"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Container from '@/app/components/Container';

import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
  
  const {id} = useParams()
  console.log(id,"rameshkkkkkkkkkkkkkkkkkkkkk")
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
  const singleProduct = productData.find(product => product.id == id)
  console.log(singleProduct)

    return (
        <div>
           
            <Container>
               product details
            <p>title:{singleProduct?.title}</p>
            <p>price:{singleProduct?.price}</p>
            <Image src={singleProduct?.thumbnail} width={500} height={500}/>
            </Container>
       
        </div>
    );
};

export default ProductDetails;