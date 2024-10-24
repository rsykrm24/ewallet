"use client"
import { useState, useEffect } from "react"
import Header from "../components/transfer/Header.jsx"
import TransferForm from "../components/transfer/TransferForm.jsx"

export default function App() {
  let [email, setEmail] = useState("");
  let [nominal, setNominal] = useState("");
  let [borderEmail, setBorderEmail] = useState("border-white");
  let [borderNominal, setBorderNominal] = useState("border-white");
  let [warn, setWarn] = useState(false);
  let [warnText, setWarnText] = useState("");
  function submit(e) {
    e.preventDefault();
    setBorderEmail("border-white");
    setBorderNominal("border-white");
    setWarnText("");
    setWarn(false)
    if(email == "") {
      setBorderEmail("border-red-600");
    }
    if(nominal == "") {
      setBorderNominal("border-red-600");
    }
    else if(nominal < 10000) {
      setWarn(true);
      setWarnText("Nominal transfer kurang dari Rp.10000");
    }
    else {
      console.log({email, nominal})
    }
  }
  return(
    <div className="h-screen">
      <Header/>
      <div className="flex flex-col items-center mt-4 h-4/5">
      {
        (warn) ? <div className="bg-red-300 text-red-600 w-11/12 p-2 rounded">{warnText}</div> : ""
      }
        <TransferForm submit={submit} email={email} emailChange={e => setEmail(e.target.value)} nominal={nominal} nominalChange={e => setNominal(e.target.value)} borderEmail={borderEmail} borderNominal={borderNominal}/>
      </div>
    </div>
    )
}