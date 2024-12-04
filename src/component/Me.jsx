import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Me() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // sent me
    emailjs.sendForm('service_pnzuub9', 'template_b1n5wwt', form.current, 'bB9ZS1rk08frkzuzN').then(() => { alert('Your message has been sent successfully') },);
    // sent clinet
    emailjs.sendForm('service_pnzuub9', 'template_w5qor3u', form.current, 'bB9ZS1rk08frkzuzN')
  };
  return (
    <div className='me'>
      <div className='container'>
        <h2 className='pt-5 d-flex justify-content-center fw-bold'>Contact Us</h2>
        <form className='mt-4' ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="form-control" id="name" placeholder="full name" />
          <input type="text" name="phone-number" className="form-control mt-3" id="phone-number" placeholder="Your whatsApp" />
          <input type="email" name="email" className="form-control mt-3" id="email" placeholder="name@example.com" />
          <textarea name="message" className="form-control border-primary mt-3" id="message" rows="3" placeholder="Let's work to gather"></textarea>
          <button className="btn btn-primary form-control mt-2" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Me