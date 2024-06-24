"use client"

import { useState } from 'react';

export default function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [info, setInfo] = useState('');
  const [isMessageSent, setMessageSent] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        subject,
        info,
        message
      })
    });

    console.log(await response.json());
    setMessageSent(true);
  }

  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="overflow-y-auto form-container flex-col-center">
        {isMessageSent ? (
          <p className="text-green-500 font-bold">Message Sent Successfully!</p>
        ) : (
          <form onSubmit={sendMail} className="p-4 sm:p-6 bg-gray-900 rounded-xl">
            <div className="flex-col-center space-y-4 text-white">
              <h1 className="text-xl font-semibold text-center">Connect with Us Today for Expert Construction Services!</h1>
              <p className="text-center">Have questions, inquiries, or ready to kickstart your project? Fill out the form below, and our dedicated team will get in touch with you promptly. Let us bring your vision to life!</p>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="subject" className="text-sm font-light text-white">
                Subject
              </label>
              <input
                name="subject"  
                id="subject"
                required
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                placeholder="Subject"
                className="rounded-xl border-2 border-gray-400 p-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="info" className="text-sm font-light text-white">
                Return Contact Information
              </label>
              <input
                name="info"  
                id="info"
                required
                value={info}
                onChange={(e) => {
                  setInfo(e.target.value);
                }}
                placeholder="Good Email or Phone Number"
                className="rounded-xl border-2 border-gray-400 p-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-sm font-light text-white">
                Message
              </label>
              <textarea
                name="message" 
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Message here..."
                className="rounded-xl border-2 border-gray-400 p-2"
              />
            </div>
            <button
              type='submit'
              className="mx-auto mt-8 flex justify-center rounded-sm text-white bg-blue-600 hover:bg-blue-700 py-2 px-6"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
