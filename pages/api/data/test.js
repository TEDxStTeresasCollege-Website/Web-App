import Filter from 'bad-words'
import { sql_query } from '../../../lib/db'

const filter = new Filter()

export default async function handler(req, res) {
  const { username, email, organisation } = req.body
  
  try {
    const results = await sql_query(`INSERT INTO pre_event_reg (f_name, l_name, ph_no, email, designation, institution) VALUES (?, ?, ?, ?, ?, ?, ?)`)
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}