import { CreateEmailResponse, Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: { method: string; body: { name: any; email: any; phone: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; success?: boolean; data?: CreateEmailResponse; details?: unknown; }): any; new(): any; }; }; }) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Rahul's Website <rahul@onresend.com>",
      to: ["rm9193421@gmail.com"], // ← change this to your Gmail
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
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email', details: error });
  }
}
