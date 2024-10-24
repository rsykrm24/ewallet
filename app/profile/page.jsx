"use client"
import Header from "../components/profile/Header.jsx"
import UserProfile from "../components/profile/UserProfile.jsx"
import SignOut from "../components/profile/SignOut.jsx"
import { getSession } from "next-auth/react"
import { useState, useEffect } from "react"

export default function Page() {
  let [user, setUser] = useState("")
  useEffect(() => {
    getSession()
    .then(res => setUser(res?.user))
  },[])
  return(
    <div className="h-screen">
      <Header />
      <UserProfile image={user.image} name={user.name} email={user.email}/>
      <SignOut/>
    </div>
    )
}