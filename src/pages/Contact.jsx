import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSent(false);
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID,e.target, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        form.current.reset();
        setIsSubmitting(false);
      }, (error) => {
        console.error(error.text);
        setErrorMessage("An error occurred. Please try again later.");
        setIsSubmitting(false);
      });
    };
  
    return (
      <div className="contact-container">
        <h1 className="contact-header">Contact Me</h1>

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button 
            className="submit-button" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                Sending
                <span className="loading-spinner"></span>
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        {isSent && (
          <div className="success-message">
            Your message has been sent successfully!
          </div>
        )}
        
        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}
      </div>
    );
  };

export default Contact
