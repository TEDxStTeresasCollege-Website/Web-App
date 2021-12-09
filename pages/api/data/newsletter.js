import { sql_query } from '../../../lib/db'

export default async function handler(req, res) {
  console.log(req.body)
  const { name, emailID, organisation } = req.body
  try {
    const new_results = await sql_query (
      `SELECT email FROM newsletter WHERE email = '${emailID}'`
    )
    if (new_results.length !== 0){
      return res.status(201).json({ message: "You are already subscribed!" })
    }
    const results = await sql_query(
      `INSERT INTO 
      newsletter (username, email, organisation ) 
      VALUES ('${name}', '${emailID}','${organisation}')`,
      [])
    res.status(200).json(req.body);
  } catch (e) {
    res.status(500).json({ message: e.message })
    console.log(e.message);
  }
}