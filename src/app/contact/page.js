"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "42bbdef5-eeb1-4a7a-9021-22c4611b0aba",
          subject: `New General Message from ${formData.name}`,
          from_name: "BH Custom Woodworks Website",
          name: formData.name,
          email: formData.email,
          details: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again or email us directly at BHWoodworx@gmail.com");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Unable to connect. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="section container">
      <div className="quote-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        {!isSuccess ? (
          <div className="quote-step fade-in">
            <div className="quote-header" style={{ marginBottom: 'var(--stack-lg)' }}>
              <h1 className="headline-xl" style={{ color: 'var(--primary)', marginBottom: 'var(--stack-xs)' }}>Contact Us</h1>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                Have a general question, or just want to chat about a future project? Drop us a note below and we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="quote-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--stack-md)' }}>
                <div className="quote-form-group">
                  <label className="label-sm mb-xs">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="quote-input" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="quote-form-group">
                  <label className="label-sm mb-xs">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="quote-input" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>

              <div className="quote-form-group mt-lg">
                <label className="label-sm mb-xs">Your Message</label>
                <textarea 
                  name="message" 
                  required 
                  className="quote-textarea" 
                  placeholder="How can we help you today?" 
                  value={formData.message} 
                  onChange={handleInputChange}
                  style={{ minHeight: '150px' }}
                />
              </div>

              <div className="quote-actions mt-xl" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="/quote" className="btn btn-outline" style={{ fontSize: '0.8rem' }}>
                  Custom Order Quote
                </a>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="quote-step fade-in" style={{ textAlign: 'center', padding: 'var(--stack-xl) 0' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: 'var(--stack-md)' }}>check_circle</span>
            <h1 className="display-md mb-sm" style={{ color: 'var(--primary)' }}>Message Sent!</h1>
            <p className="body-lg" style={{ maxWidth: '500px', margin: '0 auto', marginBottom: 'var(--stack-xl)' }}>
              Thank you, {formData.name}! Your message was sent successfully. We will review it and get back to you at {formData.email} as soon as possible.
            </p>
            <a href="/" className="btn btn-outline">Return to Homepage</a>
          </div>
        )}
      </div>
    </main>
  );
}
