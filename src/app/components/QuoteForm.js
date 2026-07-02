"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PROJECT_TYPES = [
  { id: 'memorial', label: 'Memorial Piece', image: '/images/memorial-pieces.webp' },
  { id: 'charcuterie', label: 'Charcuterie Board', image: '/images/charcuterie-boards-final.webp' },
  { id: 'cutting-board', label: 'Cutting Board', image: '/images/cutting-boards.webp' },
  { id: 'wedding', label: 'Wedding Decor', image: '/images/wedding-decor.webp' },
  { id: 'gift', label: 'Laser Engraved Gift', image: '/images/laser-gifts.webp' },
  { id: 'signage', label: 'Business Signage', image: '/images/business-signage.webp' },
  { id: 'custom', label: 'Completely Custom Idea', image: '/images/process.webp' }
];

const WOOD_TYPES = [
  { id: 'walnut', label: 'Walnut (Dark)', color: '#4a3623' },
  { id: 'cherry', label: 'Cherry (Reddish)', color: '#8b4513' },
  { id: 'maple', label: 'Maple (Light)', color: '#d2b48c' },
  { id: 'oak', label: 'White Oak (Grainy)', color: '#deb887' },
  { id: 'unsure', label: 'Not Sure Yet', color: '#e0e0e0' }
];

const FONTS = [
  { id: 'serif', label: 'Traditional Serif', style: 'font-family: Georgia, serif;' },
  { id: 'sans', label: 'Modern Sans', style: 'font-family: Helvetica, Arial, sans-serif; font-weight: bold;' },
  { id: 'script', label: 'Elegant Script', style: 'font-family: "Brush Script MT", cursive; font-size: 1.2em;' },
  { id: 'custom', label: 'I have my own font/logo', style: '' }
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [isGeneralMessage, setIsGeneralMessage] = useState(false);
  const [formData, setFormData] = useState({
    projectType: '',
    woodType: '',
    cuttingBoardStyle: '',
    indoorOutdoor: '',
    size: '',
    engravingText: '',
    fontStyle: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    zip: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Automatically scroll to the top of the page when changing steps in the form
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-advance logic for radio-like selections
    if (field === 'projectType') {
      if (value === 'custom') setStep(3); // Skip straight to details for fully custom
      else setStep(2);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => {
    if (step === 3 && formData.projectType === 'custom') setStep(1);
    else setStep(prev => prev - 1);
  };

  const submitForm = async (e) => {
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
          subject: isGeneralMessage 
            ? `General Inquiry from ${formData.name}`
            : `Custom Quote Request from ${formData.name}`,
          from_name: "BH Custom Woodworks Website",
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStep(5); // Success step
      } else {
        alert("Something went wrong. Please try again or email us directly at BHWoodworx@gmail.com");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Unable to connect. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateProgress = () => {
    if (step === 5) return 100;
    if (formData.projectType === 'custom') {
      return step === 1 ? 25 : step === 3 ? 60 : 85;
    }
    return (step / 4) * 100;
  };

  return (
    <div className="quote-container">
      
      {/* Progress Bar */}
      {step < 5 && !isGeneralMessage && (
        <div className="quote-progress">
          <div className="quote-progress-bar" style={{ width: `${calculateProgress()}%` }}></div>
        </div>
      )}

      {/* General Message Form */}
      {isGeneralMessage && step < 5 && (
        <div className="quote-step fade-in">
          <div className="quote-header">
            <h1 className="headline-lg">Send us a message</h1>
            <p className="body-md">Have a quick question or a general inquiry? Drop us a note below.</p>
          </div>

          <form onSubmit={submitForm}>
            <div className="quote-form-grid">
              <div className="quote-form-group">
                <label className="label-sm mb-xs">Full Name</label>
                <input type="text" name="name" required className="quote-input" value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="quote-form-group">
                <label className="label-sm mb-xs">Email Address</label>
                <input type="email" name="email" required className="quote-input" value={formData.email} onChange={handleInputChange} />
              </div>
            </div>

            <div className="quote-form-group mt-lg">
              <label className="label-sm mb-xs">Your Message</label>
              <textarea name="details" required className="quote-textarea" placeholder="How can we help you today?" value={formData.details} onChange={handleInputChange}></textarea>
            </div>

            <div className="quote-actions mt-xl">
              <button type="button" className="btn btn-outline" onClick={() => setIsGeneralMessage(false)}>
                Configure Custom Order
              </button>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Step 1: Project Type */}
      {step === 1 && !isGeneralMessage && (
        <div className="quote-step fade-in">
          <div className="quote-header">
            <span className="label-sm" style={{ color: 'var(--outline)' }}>Step 1 of 4</span>
            <h1 className="headline-lg">What are we building for you?</h1>
            <p className="body-md">
              Select a category below to get started.
            </p>
            <p className="body-md" style={{ marginTop: '0.5rem' }}>
              Just have a general question?
            </p>
            <p className="body-md" style={{ marginTop: '0.25rem' }}>
              <button 
                type="button" 
                onClick={() => setIsGeneralMessage(true)} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--primary)', 
                  textDecoration: 'underline', 
                  fontWeight: '600', 
                  cursor: 'pointer', 
                  padding: 0,
                  fontFamily: 'inherit',
                  fontSize: 'inherit'
                }}
              >
                Send a quick message
              </button>
            </p>
          </div>
          
          <div className="quote-grid-cards">
            {PROJECT_TYPES.map((type) => (
              <div 
                key={type.id} 
                className={`quote-card ${formData.projectType === type.id ? 'selected' : ''}`}
                onClick={() => handleSelect('projectType', type.id)}
              >
                <div className="quote-card-img">
                  <Image src={type.image} alt={type.label} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="quote-card-label">
                  <span className="headline-sm">{type.label}</span>
                  <span className="material-symbols-outlined icon">chevron_right</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Visual Specs */}
      {step === 2 && (
        <div className="quote-step fade-in">
          <div className="quote-header">
            <span className="label-sm" style={{ color: 'var(--outline)' }}>Step 2 of 4</span>
            <h1 className="headline-lg">Customize your piece</h1>
            <p className="body-md">Tell us a bit more about what you&apos;re looking for.</p>
          </div>

          <div className="quote-form-group">
            <h3 className="headline-sm mb-sm">Preferred Wood Type</h3>
            <div className="quote-swatch-grid">
              {WOOD_TYPES.map(wood => (
                <div 
                  key={wood.id}
                  className={`quote-swatch ${formData.woodType === wood.id ? 'selected' : ''}`}
                  onClick={() => handleSelect('woodType', wood.id)}
                >
                  <div className="swatch-color" style={{ backgroundColor: wood.color }}></div>
                  <span className="body-sm">{wood.label}</span>
                </div>
              ))}
            </div>
          </div>

          {formData.projectType === 'cutting-board' && (
            <div className="quote-form-group mt-lg">
              <h3 className="headline-sm mb-sm">Board Style</h3>
              <div className="quote-pill-grid">
                <div className={`quote-pill ${formData.cuttingBoardStyle === 'edge' ? 'selected' : ''}`} onClick={() => handleSelect('cuttingBoardStyle', 'edge')}>
                  <strong>Edge Grain</strong> (Classic, durable)
                </div>
                <div className={`quote-pill ${formData.cuttingBoardStyle === 'end' ? 'selected' : ''}`} onClick={() => handleSelect('cuttingBoardStyle', 'end')}>
                  <strong>End Grain</strong> (Premium, best for knives)
                </div>
              </div>
            </div>
          )}

          {formData.projectType === 'signage' && (
            <div className="quote-form-group mt-lg">
              <h3 className="headline-sm mb-sm">Placement</h3>
              <div className="quote-pill-grid">
                <div className={`quote-pill ${formData.indoorOutdoor === 'indoor' ? 'selected' : ''}`} onClick={() => handleSelect('indoorOutdoor', 'indoor')}>
                  <strong>Indoor</strong>
                </div>
                <div className={`quote-pill ${formData.indoorOutdoor === 'outdoor' ? 'selected' : ''}`} onClick={() => handleSelect('indoorOutdoor', 'outdoor')}>
                  <strong>Outdoor</strong> (Requires special finish)
                </div>
              </div>
            </div>
          )}

          <div className="quote-form-group mt-lg">
            <h3 className="headline-sm mb-sm">Approximate Size</h3>
            <input 
              type="text" 
              name="size"
              className="quote-input" 
              placeholder="e.g. 18x24 inches, or just 'Medium'"
              value={formData.size}
              onChange={handleInputChange}
            />
          </div>

          <div className="quote-actions">
            <button className="btn btn-outline" onClick={prevStep}>Back</button>
            <button className="btn btn-primary" onClick={nextStep}>Continue</button>
          </div>
        </div>
      )}

      {/* Step 3: Artwork & Uploads */}
      {step === 3 && (
        <div className="quote-step fade-in">
          <div className="quote-header">
            <span className="label-sm" style={{ color: 'var(--outline)' }}>Step 3 of 4</span>
            <h1 className="headline-lg">Details & Artwork</h1>
            <p className="body-md">Give us the details of the engraving or the custom build.</p>
          </div>

          <div className="quote-form-group">
            <h3 className="headline-sm mb-sm">Description or Engraving Text</h3>
            <textarea 
              name="details"
              className="quote-textarea"
              placeholder="What would you like engraved? Or, if this is a custom build, describe your vision here..."
              value={formData.details}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {formData.projectType !== 'custom' && (
            <div className="quote-form-group mt-lg">
              <h3 className="headline-sm mb-sm">Typography Style Preference</h3>
              <div className="quote-font-grid">
                {FONTS.map(font => (
                  <div 
                    key={font.id}
                    className={`quote-font-card ${formData.fontStyle === font.id ? 'selected' : ''}`}
                    onClick={() => handleSelect('fontStyle', font.id)}
                  >
                    <div className="font-preview" dangerouslySetInnerHTML={{ __html: `<span style='${font.style}'>Sample</span>` }} />
                    <span className="body-sm">{font.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="quote-form-group mt-lg">
            <h3 className="headline-sm mb-sm">Upload Reference Images or Logos</h3>
            <div className="quote-upload-zone">
              <span className="material-symbols-outlined icon-lg mb-sm" style={{ color: 'var(--outline)' }}>cloud_upload</span>
              <p className="body-md">Drag & drop files here, or click to browse</p>
              <p className="label-sm" style={{ color: 'var(--outline)' }}>Supports .jpg, .png, .svg, .ai, .pdf (Max 10MB)</p>
              <input type="file" multiple className="quote-file-input" />
            </div>
          </div>

          <div className="quote-actions">
            <button className="btn btn-outline" onClick={prevStep}>Back</button>
            <button className="btn btn-primary" onClick={nextStep}>Continue</button>
          </div>
        </div>
      )}

      {/* Step 4: Contact Info */}
      {step === 4 && (
        <div className="quote-step fade-in">
          <div className="quote-header">
            <span className="label-sm" style={{ color: 'var(--outline)' }}>Step 4 of 4</span>
            <h1 className="headline-lg">Where should we send the quote?</h1>
            <p className="body-md">We usually reply within 24-48 hours with a detailed quote and next steps.</p>
          </div>

          <form onSubmit={submitForm}>
            <div className="quote-form-grid">
              <div className="quote-form-group">
                <label className="label-sm mb-xs">Full Name</label>
                <input type="text" name="name" required className="quote-input" value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="quote-form-group">
                <label className="label-sm mb-xs">Email Address</label>
                <input type="email" name="email" required className="quote-input" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="quote-form-group">
                <label className="label-sm mb-xs">Phone Number (Optional)</label>
                <input type="tel" name="phone" className="quote-input" value={formData.phone} onChange={handleInputChange} />
              </div>
              <div className="quote-form-group">
                <label className="label-sm mb-xs">Shipping Zip Code</label>
                <input type="text" name="zip" required className="quote-input" value={formData.zip} onChange={handleInputChange} placeholder="For shipping estimate" />
              </div>
            </div>

            <div className="quote-form-group mt-lg">
              <label className="label-sm mb-sm">When do you need this by?</label>
              <select name="timeline" className="quote-select" required value={formData.timeline} onChange={handleInputChange}>
                <option value="">Select a timeline...</option>
                <option value="flexible">I&apos;m flexible</option>
                <option value="standard">Standard (3-4 weeks)</option>
                <option value="rush">Rush (Need it ASAP - may incur fee)</option>
              </select>
            </div>

            <div className="quote-actions mt-xl">
              <button type="button" className="btn btn-outline" onClick={prevStep}>Back</button>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending Request...' : 'Submit Quote Request'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Step 5: Success */}
      {step === 5 && (
        <div className="quote-step fade-in" style={{ textAlign: 'center', padding: 'var(--stack-xl) 0' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: 'var(--stack-md)' }}>check_circle</span>
          <h1 className="display-md mb-sm" style={{ color: 'var(--primary)' }}>
            {isGeneralMessage ? 'Message Sent!' : 'Request Received!'}
          </h1>
          <p className="body-lg" style={{ maxWidth: '600px', margin: '0 auto', marginBottom: 'var(--stack-xl)' }}>
            {isGeneralMessage 
              ? `Thank you, ${formData.name || 'there'}! Your message has been sent successfully. We will review it and get back to you at ${formData.email} as soon as possible.`
              : `Thank you, ${formData.name || 'there'}! We have received your custom order request and will be reviewing the details shortly. Keep an eye on your email (${formData.email}) for a response from us.`
            }
          </p>
          <Link href="/" className="btn btn-outline">Return to Homepage</Link>
        </div>
      )}

    </div>
  );
}
