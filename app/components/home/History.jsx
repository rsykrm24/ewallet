"use client"
import List from "./List.jsx"
import { useState, useEffect } from "react"
import { getSession } from "next-auth/react"
import axios from "axios"
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import AddCardIcon from '@mui/icons-material/AddCard';
import SendIcon from '@mui/icons-material/Send';
import Link from "next/link"

export default function History() {
  const [user, setUser] = useState("")
  const [data, setData] = useState([])

  // Fetching data function
  const fetchData = async (email) => {
    try {
      const response = await axios.post("http://localhost:3000/api/all", { email })
      const allData = response.data?.data || []
      // Get last 3 transactions
      const historyData = allData.slice(Math.max(allData.length - 3, 0))
      setData(historyData.reverse())
    } catch (error) {
      console.error("Error fetching history data:", error)
    }
  }

  useEffect(() => {
    const getUserSession = async () => {
      const session = await getSession()
      if (session?.user?.email) {
        setUser(session.user)
        await fetchData(session.user.email)
      }
    }
    getUserSession()
  }, [])

  return (
    <div className="border-2 border-white rounded-xl w-11/12 p-3 mt-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">History</h1>
        <Link href="/history">See all</Link>
      </div>
      <div className="mt-3 flex flex-col gap-3">
        {data.length === 0
          ? <p>No recent history</p>
          : data.map((item, index) => (
              <List key={index} price={item.debit} item={(item.metode.split(" ")[1] == "+" || item.metode.split(" ")[1] == "-") ? item.metode.split(" ")[0] : item.metode} account={item.receiver} logo={(item.metode == "top up") ? <AddCardIcon/> : (item.metode == "transfer +" || item.metode == "transfer -") ? <SendIcon/> : <PaymentsIcon/>} text={(item.metode == "top up" || item.metode == "transfer +") ? "text-green-600" : "text-red-600"}/>
            ))
        }
      </div>
    </div>
  )
}