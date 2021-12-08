import { sql_query } from '../../../lib/db'

export default async function handler(req, res) {
  const { name, emailID, organisation } = req.body
  try {
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