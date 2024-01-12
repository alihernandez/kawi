import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { subject, message } = await request.json();

        // const transporter = nodemailer.createTransport({

        // })

        const mailOption = {
            from: 'contact.form9two@yahoo.com',
            to: 'ali.hernandez92@gmail.com',
            subject: "Send Email Tutorial",
            html: `
        <h3>Hello User/h3>
        <li> title: ${subject}</li>
        <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}