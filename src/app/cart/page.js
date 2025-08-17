"use client"
import React from 'react'
import { useAppSelector } from '../lib/hooks'

export default function CartPage() {
  const data = useAppSelector(selector => selector) 
  console.log(data)
  return (
    <div>
      cartpage
    </div>
  )
}
