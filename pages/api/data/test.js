import Filter from 'bad-words'
import { query } from '../../lib/db'

const filter = new Filter()

export default async function handler(req, res) {
  const { username, email, organisation } = req.body
  try {
    // if (!title || !content) {
    //   return res
    //     .status(400)
    //     .json({ message: '`title` and `content` are both required' })
    // }

    const results = await query(
      `
      INSERT INTO newsletter (username, email, organisation)
      VALUES (?, ?, ?)
      `,
      [filter.clean(username), filter.clean(email), filter.clean(organisation)]
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}