// pages/api/sendToTelegram.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Aquí es donde enviarías los datos a tu servidor Python
    const data = req.body;

    const response = await fetch('http://localhost:5000/api/receiveData', { // reemplaza esto con la URL de tu servidor Python
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      console.error('Failed to send data to Python server');
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