"use client"
import { useRouter } from "next/navigation"
import { getSession } from "next-auth/react"
import { useState, useEffect } from "react"

export default function Home() {
  const router = useRouter();
  let [user, setUser] = useState("")
  useEffect(() => {
    getSession()
    .then(res => setUser(res.user))
    .catch(err => setUser(""))
  },[])
  setTimeout(() => {
    if(user == "") {
      router.push("/login")
    }
    else {
      router.push("/home")
    }
  },1000)
  
  return(
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold"><i>EWallet</i></h1>
    </div>
    )
}