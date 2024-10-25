"use client"
import { getSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "../components/home/Header.jsx"
import Atm from "../components/home/Atm.jsx"
import Category from "../components/home/Category.jsx"
import History from "../components/home/History.jsx"
import axios from "axios"

export default function Page() {
  let route = useRouter()
  let [user, setUser] = useState("")
  let [amount, setAmount] = useState("")
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  useEffect(() => {
  getSession()
    .then(res => {
      if (res == null) {
        route.push("/login")
      } else {
        setUser(res.user)
        axios.post("http://localhost:3000/api/all", {
          email: res.user.email
        })
        .then(res => {
          const lastAmount = res.data?.data?.[res.data.data.length - 1]?.amount || 0;
          setAmount(lastAmount)
          sessionStorage.setItem("amount", lastAmount)
        })
        .catch(err => console.log(err))
      }
    })
  }, [])
  return(
    <div className="h-screen">
      <Header user={user?.name?.split(" ")[0]}/>
      <div className="h-1/4 flex justify-center mt-4">
        <Atm user={user?.name} amount={numberWithCommas(amount)}/>
      </div>
      <Category />
      <div className="flex justify-center">
        <History />
      </div>
    </div>
    )
}