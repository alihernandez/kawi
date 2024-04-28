"use client"

import { useState } from 'react';

export default function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
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
        message
      })
    });

    console.log(await response.json());
    setMessageSent(true);
  }

  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-8">
      <div className='flex flex-col justify-center items-center w-full sm:w-4/5 rounded-xl' id='contactForm'>
        {isMessageSent ? (
          <p className="text-green-500 font-bold">Message Sent Successfully!</p>
        ) : (
          <form onSubmit={sendMail} className="p-4 sm:p-6" id='innerLine'>
            <div className="flex flex-col items-center w-full  text-center">
              <h1 className="text-xl font-semibold">Connect with Us Today for Expert Construction Services!</h1>
              <p>Have questions, inquiries, or ready to kickstart your project? <br/> Fill out the form below, and our dedicated team will get in touch with you promptly. <br />Let's bring your vision to life!</p>
            </div>
            <div className="relative flex flex-col space-y-2">
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
  <div className="relative flex flex-col space-y-2">
    <label htmlFor="description" className="text-sm font-lg text-white">
      Contact us today!
    </label>
    <textarea
      name="message" 
      id="description"
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
  className="mx-auto mt-8 flex justify-center rounded-sm text-white hover:shadow-md"
  id='mailButton'
>
  <span className='box'>Send Message</span>
</button>
          </form>
        )}
      </div>
    </main>
  );
}
