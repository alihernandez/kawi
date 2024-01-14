import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({

      host: process.env.NEXT_PUBLIC_HOST,    
      port: 465,     
      secure: true,
      auth: {
      user: process.env.NEXT_PUBLIC_USERNAME,
      pass: process.env.NEXT_PUBLIC_PASS_KEY
      },
      tls: {
      ciphers: 'SSLv3',
      
      }
      
      })

    // await transporter.sendMail({
    //   from: "contact.form9two@yahoo.com",
    //   to: "ali.hernandez9two@gmail.com",
    //   replyTo: email,
    //   subject: `Website activity from ${email}`,
    //   html: `
    //     <p>Name: ${name} </p>
    //     <p>Email: ${email} </p>
    //     <p>Message: ${message} </p>
    //   `,
    // });

    const mailOption = {
      from: process.env.NEXT_PUBLIC_USERNAME,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: "Message from website",
      html: `
        <h3>Hello Kawi Services!</h3>
        <li> title: ${subject}</li>
        <li> message: ${message}</li> 
      `,
    };

    console.log(process.env.NEXT_PUBLIC_EMAIL);

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
    
  }
}
