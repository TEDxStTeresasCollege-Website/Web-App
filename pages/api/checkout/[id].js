import { data } from 'autoprefixer';
import { NextApiRequest, NextApiResponse } from 'next';
import { sql_query } from '../../../lib/db';

import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {apiVersion: '2020-03-02'})
export default async function handler (req = NextApiRequest , res = NextApiResponse) 
{   
      const { id } = req.query;
      try {
      const session = await stripe.checkout.sessions.retrieve(id, {expand:[`payment_intent`]})
      //console.log(session)
      const results = await sql_query (
        `UPDATE cochym_reg SET payment_status = '${session.payment_intent.status}' WHERE email ='${session.customer_details.email}'`
      )
      res.status(200).json({ email: session.customer_details.email, status: session.payment_intent.status })
      } catch (error) {
        res.status(500).json(error)
      }
      
}