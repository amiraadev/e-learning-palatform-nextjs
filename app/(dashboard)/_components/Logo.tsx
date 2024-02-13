"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router =  useRouter()
  const backToHome = () => {
    router.push('/');
  };  return (
   <Image
   className=' cursor-pointer'
    height={130}
    width={130}
    alt="logo"
    // src="/logo.svg"
    src="/amira-logo.svg"
    onClick={backToHome}
   />
  )
}

export default Logo