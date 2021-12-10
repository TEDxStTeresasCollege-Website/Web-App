import { sql_query } from '../../../lib/db'

export default async function handler(req, res) {
  const { firstName, lastName, mobile, email, designation, institution } = req.body
  try {
    const new_results = await sql_query(
      `SELECT email , payment_status FROM cochym_reg WHERE email = '${email}'`
    )
    if(new_results.length !== 0){
      if ( new_results[0].payment_status === "succeeded" ){
        return res.status(201).json({ message: "You are already registered!" })
      }
      return res.status(200).json(req.body)  
    }
    const results = await sql_query(
      `
      INSERT INTO 
      cochym_reg (f_name, l_name, ph_no, email, designation, institution) 
      VALUES ('${firstName}', '${lastName}','${mobile}', '${email}', 
      '${designation}', "${institution}")`)
    res.status(200).json(req.body);
  } catch (e) {
    res.status(500).json({ message: e.message })
    console.log(e.message);
  }
}