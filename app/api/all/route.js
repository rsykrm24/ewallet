import { NextRequest, NextResponse } from "next/server";
import db from "../../libs/supabase/supabase.js";

export async function POST(req,res) {
  try{
    let {email} = await req.json()
    let {error,data} = await db.from("ewallet").select().eq("email",email)
    if (error) throw error;
    return NextResponse.json({ status: 200, data:data,message: "Data berhasil didapat" }, { status: 200 });
  }
  catch(err) {
    return NextResponse.json({ status: 404, message: "Data gagal didapatkan" }, { status: 404 });
  }
}