import { NextRequest, NextResponse } from "next/server"
import { getData } from "./getData.js"
import { postData } from "./postData.js"

export async function POST(req, res) {
  try {
    let data = await req.json()
    let email = await getData(data.email)
    let receiver = await getData(data.receiver)
    let amountEmail = (email.data.length > 0 ) ? parseInt(email.data[email.data.length-1].amount) : 0
    let amountReceiver = (receiver.data.length > 0) ? parseInt(receiver.data[receiver.data.length-1].amount) : 0
    let transferEmail = await postData(data.email,"transfer -",data.receiver,data.debit,amountEmail-parseInt(data.debit))
    let transferReceiver = await postData(data.receiver,"transfer +",data.email,data.debit,amountReceiver+parseInt(data.debit))
    return NextResponse.json({status:200,message:"Transfer berhasil"},{status:200})
  }
  catch(err) {
    return NextResponse.json({ status: 404, message: "Transfer gagal" }, { status: 404 });
  }
}