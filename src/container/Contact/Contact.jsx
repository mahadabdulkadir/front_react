import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { client } from '../../client';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    contact_number: '',
    user_name: '',
    user_email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    // Initialize emailjs
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    formData.contact_number = Math.random() * 100000 | 0;

    let formElement = document.getElementById('contact-form');
    if (formElement) {
      emailjs.sendForm('service_hqu6ujb', 'contact_form', formElement)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((error) => {
          setLoading(false);
          console.log('Email sending FAILED...', error);
        });
    }
  };
  return (
    <>
    <h2 className="head-text">Contact Form</h2>

    <div className="app__footer-cards">
      <div className="app__footer-card ">
        <img src={images.email} alt="email" />
        <a href="mailto:mahadabdulkadir47@gmail.com" className="p-text">
        info@splitsecondproductions.com
        </a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="phone" />
      </div>
    </div>

  <div className="app__footer-form app__flex">
        <form id="contact-form" onSubmit={handleSubmit} ref={formRef}>  
          <input type="hidden" name="contact_number" value={formData.contact_number} />
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="user_name" value={formData.user_name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="user_email" value={formData.user_email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={formData.message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <button type="submit" className="p-text">
              {!loading ? 'Send Message' : 'Sending...'}
            </button>
          </div>
        </form>
      </div>

      {isFormSubmitted && (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
}

export default AppWrap(Contact, 'contact');