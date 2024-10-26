import db from "../../libs/supabase/supabase.js";

export async function postData(email, metode, receiver, debit, amount) {
  let data = db.from("ewallet").insert({
    email:email, 
    metode:metode,
    receiver:receiver,
    debit:debit,
    amount:amount
  })
  return data
}