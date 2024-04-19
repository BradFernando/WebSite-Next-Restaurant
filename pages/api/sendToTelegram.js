// pages/api/sendToTelegram.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Aquí es donde enviarías los datos a Telegram
    const data = req.body;

    const response = await fetch('https://api.telegram.org/bot6556491083:AAFKdXsUErUqMhHzsMNZhzkmN5OXWI7us0Y/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: '2084365198', // reemplaza esto con el ID de tu chat
        text: JSON.stringify(data, null, 2)
      })
    });

    if (!response.ok) {
      console.error('Failed to send data to Telegram');
      res.status(500).json({ status: 'error' });
      return;
    }

    res.status(200).json({ status: 'success' });
  } else {
    // Manejar cualquier otro método HTTP
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}