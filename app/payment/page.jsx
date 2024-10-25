"use client"
import { useState, useEffect } from "react"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Header from "../components/payment/Header.jsx"
import PaymentForm from "../components/payment/PaymentForm.jsx"
import Confirmation from "../components/payment/Confirmation.jsx"
import axios from "axios"

export default function Page() {
  let route = useRouter()
  let [user, setUser] = useState("")
  let [kodePerusahaan, setKodePerusahaan] = useState("");
  let [virtualNumber, setVirtualNumber] = useState("");
  let [nominal, setNominal] = useState("");
  let [borderKodePerusahaan, setBorderKodePerusahaan] = useState("border-white");
  let [borderVirtualNumber, setBorderVirtualNumber] = useState("border-white");
  let [borderNominal, setBorderNominal] = useState("border-white");
  let [warn, setWarn] = useState(false);
  let [warnText, setWarnText] = useState("");
  let [confirm, setConfirm] = useState("bottom-[-1000px]");
  let [amount, setAmount] = useState("")
  useEffect(() => {
    getSession()
    .then(res => setUser(res.user))
    setAmount(sessionStorage.getItem("amount"))
  },[]) 
  function submit(e) {
    e.preventDefault();
    setBorderKodePerusahaan("border-white");
    setBorderVirtualNumber("border-white");
    setBorderNominal("border-white");
    setWarnText("");
    setWarn(false);
    if(kodePerusahaan == "") {
      setBorderKodePerusahaan("border-red-600");
    }
    else if(kodePerusahaan.length != 4) {
      setWarnText("Kode perusahan tidak ada");
      setWarn(true);
    }
    if(virtualNumber == "") {
      setBorderVirtualNumber("border-red-600");
    }
    else if(virtualNumber.length != 12) {
      setWarnText("Virtual number tidak ada");
      setWarn(true);
    }
    if(nominal == "") {
      setBorderNominal("border-red-600");
    }
    else if(nominal < 10000) {
      setWarn(true);
      setWarnText("Nominal payment kurang dari Rp.10000");
    }
    else if(kodePerusahaan != "" && kodePerusahaan.length == 4 && virtualNumber != "" && virtualNumber.length == 12 && nominal != "" && nominal >= 10000){
      setConfirm("bottom-0");
    }
  }
  function submitPayment() {
    axios.post("http://localhost:3000/api/payment",{
      email:user.email, 
      method:"payment",
      receiver:`${kodePerusahaan} ${virtualNumber}`,
      debit:nominal, 
      amount:parseInt(amount)-parseInt(nominal) 
    })
    .then(res => route.push("/home"))
  }
  return(
    <div className="h-screen">
      <Confirmation amount={nominal} email={user?.email} accountReceiver={`${kodePerusahaan} ${virtualNumber}`} confirm={confirm} close={() => setConfirm("bottom-[-1000px]")} image={user?.image} submitConfirmation={() => submitPayment()}/>
      <Header link={(confirm == "bottom-[-1000px]") ? "/home" : ""}/>
      <div className="flex flex-col items-center mt-4 h-4/5">
      {
        (warn) ? <div className="bg-red-300 text-red-600 w-11/12 p-2 rounded">{warnText}</div> : ""
      }
        <PaymentForm submit={submit} nominal={nominal} nominalChange={e => setNominal(e.target.value)} borderNominal={borderNominal} virtualNumber={virtualNumber} kodePerusahaan={kodePerusahaan} virtualNumberChange={e => setVirtualNumber(e.target.value)} kodePerusahaanChange={e => setKodePerusahaan(e.target. value)} borderKodePerusahaan={borderKodePerusahaan} borderVirtualNumber={borderVirtualNumber}/>
      </div>
    </div>
    )
}