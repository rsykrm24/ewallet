import db from "../../libs/supabase/supabase.js";

export async function getData(email) {
  let data = db.from("ewallet").select().eq("email",email)
  return data
}