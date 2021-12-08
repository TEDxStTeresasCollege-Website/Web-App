import { sql_query } from '../../../lib/db'

export default async function handler(req, res) {
  const { firstName, lastName, mobile, emailID, designation, institution, aadhar } = req.body
  console.log(req.body)
  try {
    const results = await sql_query(
      `INSERT INTO 
      cochym_reg (f_name, l_name, ph_no, email, designation, institution, aadhar) 
      VALUES ('${firstName}', '${lastName}','${mobile}', '${emailID}', 
      '${designation}', '${institution}', '${aadhar}')`)
    res.status(200).json(req.body);
  } catch (e) {
    res.status(500).json({ message: e.message })
    console.log(e.message);
  }
}