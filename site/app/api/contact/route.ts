import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { firstName, lastName, email, phone, message } = body;

  try {
    const result = await resend.emails.send({
      from: "Connor Bell (Website) <websitecontact@connorbell.co.za>",
      to: [
        process.env.CONTACT_EMAIL_PRIMARY!,
        process.env.CONTACT_EMAIL_SECONDARY!
      ],
      replyTo: email,
      subject: `WEBSITE CONTACT (cbell.co.za) New Message From ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return Response.json({ error });
  }
}