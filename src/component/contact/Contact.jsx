import React, { useEffect, useState } from 'react';
import './contact.css'; // Make sure to create this CSS file

const ContactForm = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div>
      {loading ? (
        <div className="about-loader-container">
          <div className="about-sci-fi-loader"></div>
        </div>
      ) : (
        <div className="container">
          <div className="contact-parent">
            <div className="contact-child child1">
              <p>
                <i className="fas fa-map-marker-alt"></i> Address <br />
                <span> Ash Lane 110
                  <br />
                  London, UK
                </span>
              </p>

              <p>
                <i className="fas fa-phone-alt"></i> Let's Talk <br />
                <span> 0787878787</span>
              </p>

              <p>
                <i className="far fa-envelope"></i> General Support <br />
                <span>andreea@andreeabunget.co.uk</span>
              </p>
            </div>

            <div className="contact-child child2">
              <div className="inside-contact">
                <h2>Contact Us</h2>
                <h3>
                  <span id="confirm"></span>
                </h3>

                <form onSubmit={handleSubmit}>
                  <p>Name *</p>
                  <input id="name" type="text" required onChange={handleChange} />

                  <p>Email *</p>
                  <input id="email" type="email" required onChange={handleChange} />

                  <p>Phone *</p>
                  <input id="phone" type="tel" required onChange={handleChange} />

                  <p>Subject *</p>
                  <input id="subject" type="text" required onChange={handleChange} />

                  <p>Message *</p>
                  <textarea id="message" rows="4" cols="20" required onChange={handleChange}></textarea>
                  
                  <input type="submit" id="btn_send" value="SEND" />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;