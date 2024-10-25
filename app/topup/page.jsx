"use client"
import { useState, useEffect } from "react"
import Header from "../components/topup/Header.jsx"
import TopupForm from "../components/topup/TopupForm.jsx"
import Confirmation from "../components/topup/Confirmation.jsx"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function Page() {
  let route = useRouter()
  let [user, setUser] = useState("")
  let [nominal, setNominal] = useState("");
  let [borderNominal, setBorderNominal] = useState("border-white");
  let [warn, setWarn] = useState(false);
  let [warnText, setWarnText] = useState("");
  let [confirm, setConfirm] = useState("bottom-[-1000px]")
  let [amount, setAmount] = useState("")
  useEffect(() => {
    getSession()
    .then(res => setUser(res.user))
    setAmount(sessionStorage.getItem("amount"))
  },[])
  function submit(e) {
    e.preventDefault();
    setBorderNominal("border-white");
    setWarnText("");
    setWarn(false)
    if(nominal == "") {
      setBorderNominal("border-red-600");
    }
    else if(nominal < 10000) {
      setWarn(true);
      setWarnText("Nominal top up kurang dari Rp.10000");
    }
    else if(nominal != "" && nominal>=10000) {
      setConfirm("bottom-0")
    }
  }
  function submitTransaction() {
    axios.post("http://localhost:3000/api/topup",{
      email:user.email, 
      method:"top up",
      receiver:"-",
      debit:nominal, 
      amount:parseInt(amount)+parseInt(nominal) 
    })
    .then(res => route.push("/home"))
  }
  return(
    <div className="h-screen">
      <Confirmation amount={nominal} email={user?.email} confirm={confirm} close={() => setConfirm("bottom-[-1000px]")} image={user?.image} submitConfirmation={() => submitTransaction()}/>
      <Header link={(confirm == "bottom-[-1000px]") ? "/home" : ""}/>
      <div className="flex flex-col items-center mt-4 h-4/5">
      {
        (warn) ? <div className="bg-red-300 text-red-600 w-11/12 p-2 rounded">{warnText}</div> : ""
      }
        <TopupForm submit={submit} nominal={nominal} nominalChange={e => setNominal(e.target.value)} borderNominal={borderNominal}/>
      </div>
    </div>
    )
}