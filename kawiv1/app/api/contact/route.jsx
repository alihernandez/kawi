import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
//   const username = ;
//   const password = ;
//   const myEmail = ;

  console.log("dealing with request");
  const formData = await request.formData();
  console.log(formData);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // create transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 587,
    secure: false,
    // Encryption: TLS/SSL,
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    await transporter.verify();
  console.log('SMTP connection verified successfully');
    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    }
    
    );
    console.log("sendMAil");
    return new NextResponse.json({ message: 'Success: email was sent' });
} catch (error) {
  console.error('Error:', error);
  console.log(myEmail);

  if (error.response) {
    console.error('SMTP Response:', error.response);
  }

  return new NextResponse.json({ message: 'COULD NOT SEND MESSAGE' }, { status: 500 });

}
}
