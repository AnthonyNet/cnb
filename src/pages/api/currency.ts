/* 
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await fetch(
      'http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt',
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.text();
   // console.log(data)
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
} 
*/