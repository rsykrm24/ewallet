import { NextRequest, NextResponse } from "next/server";
import db from "../../libs/supabase/supabase.js";

export async function POST(req) {
  try {
    let data = await req.json();
    const { error } = await db
      .from('ewallet')
      .insert({
        email: data.email,
        metode: data.method,
        receiver: data.receiver,
        debit: data.debit,
        amount: data.amount,
      });
    if (error) throw error;
    return NextResponse.json({ status: 200, message: "Data berhasil diinput" }, { status: 200 });
  } catch (err) {
    console.error("Error inserting data:", err);
    return NextResponse.json({ status: 500, message: "Data gagal diinput" }, { status: 500 });
  }
}