import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { firstName, lastName, email, phone, message } = body;

  try {
    await resend.emails.send({
      from: "Website Contact (cbell.co.za) <onboarding@resend.dev>",
      to: [
        "connorbell27@icloud.com", /* Personal Email */ 
        "u24569608@tuks.co.za", /* School/Work Email */ 
      ],
      subject: `(cbell.co.za) New Message From ${firstName} ${lastName}`,
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
    return Response.json({ error });
  }
}