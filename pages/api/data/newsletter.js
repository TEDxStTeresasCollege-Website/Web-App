// export default (req, res) => {
//   console.log(req.body);
//   res.status(200).json(req.body)
// }

import Filter from 'bad-words'
import { sql_query } from '../../../lib/db'

const filter = new Filter()

export default async function handler(req, res) {
  const { firstName, lastName, mobile, emailID, designation, institution } = req.body

  try {
    const results = await sql_query(`INSERT INTO pre_event_reg (f_name, l_name, ph_no, email, designation, institution ) VALUES ('${firstName}', '${lastName}','${mobile}', '${emailID}', '${designation}', '${institution}')`)
    res.status(200).json(req.body);
  } catch (e) {
    res.status(500).json({ message: e.message })
    console.log(e.message);
  }
  
}