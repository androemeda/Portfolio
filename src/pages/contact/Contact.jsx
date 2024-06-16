// src/Contact.js
import React, { useState } from 'react';
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'Web Development'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-section">
      <div className="contact-info">
        <div className="contact-details">
          <a href="mailto:kartikdeshpande.work@gmail.com"><MdEmail/>kartikdeshpande.work@gmail.com</a>
          <p><IoLocationOutline/>Nagpur/Bengaluru, India</p>
        </div>
        <h2>Let's discuss on something <span className="highlight">cool</span> together</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
    
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone No."
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Enter Message *"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;