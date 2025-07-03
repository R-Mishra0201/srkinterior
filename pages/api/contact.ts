// /pages/api/contact.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const data = await resend.emails.send({
    from: "Resend Starter <onboarding@resend.dev>", // ✅ Default verified sender
    to: ["rm9193421@gmail.com"],
    subject: "New Contact Form Submission",
    html: `
      <h2>New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/> ${message}</p>
    `
  });  

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error("❌ Resend API Error:", error);
    return res.status(500).json({ error: 'Failed to send email', details: error?.message || error });
  }
}
