"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getSession } from "next-auth/react"
import { useState, useEffect } from "react"

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    getSession()
    .then(res => {
      if(res != null) {
        router.push("/home")
      }
    })
  },[])
  return(
    <div className="h-screen flex justify-center items-center">
      <div className='h-1/2 w-1/2 flex flex-col justify-between items-center'>
        <h1 className="text-4xl font-bold"><i>EWallet</i></h1>
        <Link href="/api/auth/signin" className="border-2 py-1 px-2 text-center font-bold border-white rounded w-full">Sign In</Link>
      </div>
    </div>
    )
}