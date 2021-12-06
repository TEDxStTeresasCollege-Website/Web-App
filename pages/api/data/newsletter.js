import Filter from 'bad-words'
import { sql_query } from '../../../lib/db'

const filter = new Filter()

export default async function handler(req, res) {
  const { username, email, organisation } = req.body
  console.log(req.body);
  
//   const { firstName, lastName, mobile, emailID, designation, institution } = req.body
//   res.console.log(firstName);
//   try {
//     const results = await sql_query(`INSERT INTO newsletter (username, email, organisation) VALUES ('BCD', 'example@gmail.com', 'Project Aspects')`)
//     return res.json(results)
//   } catch (e) {
//     res.status(500).json({ message: e.message })
//   }
}