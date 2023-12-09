import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
  const username = "contact.form9two@yahoo.com";
  const password = "pseaghzjusxhirhc";
  const myEmail = "ali.hernandez9two@gmail.com";

  console.log("dealing with request");
  const formData = await request.formData();
  console.log(formData);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // create transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true,
    auth: {
      user: "contact.form9two@yahoo.com",
      pass: "pseaghzjusxhirhc",
    },
  });

  try {
    await transporter.sendMail({
      from: "contact.form9two@yahoo.com",
      to: "ali.hernandez9two@gmail.com",
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
