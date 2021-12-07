
import Filter from 'bad-words'
import { query } from '../../../lib/db'

// export default function handler(req, res) {
//   console.log(req.body)
//   res.status(200).json(req.body);
// }


const filter = new Filter()


 
export default  async function handler (req, res) {
  const { firstName, lastName, mobile, emailID, designation, institution } = req.body
  console.log(lastName);
  res.status(200).json(req.body);
  // try {
  //   if (!firstName ||  !lastName ||  !mobile || !emailID ||  !designation || !institution) {
  //     return res
  //       .status(400)
  //       .json({ message: '`First Name` , `Last Name` , `Mobile Number` ,  `Email ID` ,  `Designation` and `Institution` are all required' })
  //   }
  //   const results = await query(
  //     `INSERT INTO newsletter (f_name, l_name, ph_no, email, designation, institution) VALUES (?, ?, ?)`,
  //     [filter.clean(email), filter.clean(username), filter.clean(organisation)]
  //   )
  //   return res.json(results)
  
  // } catch (e) {
  //   res.status(500).json({ message: e.message })
  // }
}
