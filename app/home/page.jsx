"use client"
import { getSession } from "next-auth/react"
import { useState, useEffect } from "react"
import Header from "../components/home/Header.jsx"
import Atm from "../components/home/Atm.jsx"
import Category from "../components/home/Category.jsx"
import History from "../components/home/History.jsx"

export default function Page() {
  let [user, setUser] = useState("")
  useEffect(() => {
    getSession() 
    .then(res => setUser(res.user))
  },[])
  return(
    <div className="h-screen">
      <Header user={user?.name?.split(" ")[0]}/>
      <div className="h-1/4 flex justify-center mt-4">
        <Atm user={user?.name} amount={12000}/>
      </div>
      <Category />
      <div className="flex justify-center">
        <History />
      </div>
    </div>
    )
}