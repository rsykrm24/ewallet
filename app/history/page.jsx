"use client"
import { useState, useEffect } from "react"
import { getSession } from "next-auth/react"
import Header from "../components/history/Header.jsx"
import List from "../components/history/List.jsx"
import axios from "axios"
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import AddCardIcon from '@mui/icons-material/AddCard';
import SendIcon from '@mui/icons-material/Send';

export default function Page() {
  let [data, setData] = useState("")
  useEffect(() => {
    getSession()
    .then(res => {
      axios.post("http://localhost:3000/api/all",{
        email:res.user.email
      })
      .then(res => setData(res.data.data.reverse()))
    })
  })
  return(
    <div>
      <Header/>
      <div className="mt-2 p-2 flex flex-col gap-3">
      {
        (data.length == 0) ? <p>No history recently</p> : data.map((item, index) => (
              <List key={index} price={item.debit} item={(item.metode.split(" ")[1] == "+" || item.metode.split(" ")[1] == "-") ? item.metode.split(" ")[0] : item.metode} account={item.receiver} logo={(item.metode == "top up") ? <AddCardIcon/> : (item.metode == "transfer +" || item.metode == "transfer -") ? <SendIcon/> : <PaymentsIcon/>} text={(item.metode == "top up" || item.metode == "transfer +") ? "text-green-600" : "text-red-600"}/>))
      }
      </div>
    </div>
    )
}