"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "../components/transfer/Header.jsx"
import TransferForm from "../components/transfer/TransferForm.jsx"
import Confirmation from "../components/transfer/Confirmation.jsx"
import { getSession } from "next-auth/react"
import axios from "axios"

export default function Page() {
  let route = useRouter()
  let [user, setUser] = useState("")
  let [email, setEmail] = useState("");
  let [nominal, setNominal] = useState("");
  let [borderEmail, setBorderEmail] = useState("border-white");
  let [borderNominal, setBorderNominal] = useState("border-white");
  let [warn, setWarn] = useState(false);
  let [warnText, setWarnText] = useState("");
  let [confirm, setConfirm] = useState("bottom-[-1000px]");
  useEffect(() => {
    getSession() 
    .then(res => setUser(res.user))
  },[]) 
  function submit(e) {
    e.preventDefault();
    setBorderEmail("border-white");
    setBorderNominal("border-white");
    setWarnText("");
    setWarn(false)
    if(email == "") {
      setBorderEmail("border-red-600");
    }
    else if(user.email == email) {
      setWarn(true);
      setWarnText("Tidak bisa mengirim ke email pribadi");
    }
    if(nominal == "") {
      setBorderNominal("border-red-600");
    }
    else if(nominal < 10000) {
      setWarn(true);
      setWarnText("Nominal transfer kurang dari Rp.10000");
    }
    else if(email != "" && email != user.email && nominal != "" && nominal >= 10000){
      setConfirm("bottom-0");
    }
  }
  function submitTransaction() {
    axios.post("http://localhost:3000/api/transfer",{
      email:user.email, 
      receiver:email, 
      debit:nominal, 
      amount:parseInt(sessionStorage.getItem("amount")) - nominal
    })
    .then(res => route.push("/home"))
  }
  return(
    <div className="h-screen">
      <Confirmation amount={nominal} email={user?.email} accountReceiver={email} confirm={confirm} close={() => setConfirm("bottom-[-1000px]")} image={user?.image}/>
      <Header link={(confirm == "bottom-[-1000px]") ? "/home" : ""}/>
      <div className="flex flex-col items-center mt-4 h-4/5">
      {
        (warn) ? <div className="bg-red-300 text-red-600 w-11/12 p-2 rounded">{warnText}</div> : ""
      }
        <TransferForm submit={submit} email={email} emailChange={e => setEmail(e.target.value)} nominal={nominal} nominalChange={e => setNominal(e.target.value)} borderEmail={borderEmail} borderNominal={borderNominal} submitTransaction={() => submitTransaction()}/>
      </div>
    </div>
    )
}