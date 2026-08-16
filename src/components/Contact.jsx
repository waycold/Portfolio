import React from 'react';
import { cvData } from '../data/content';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="heading-md">Let's Connect</h2>
        <p className="text-body mb-10">
          I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href={`mailto:${cvData.personalInfo.email}`} className="btn-primary w-full sm:w-auto">
            Say Hello
          </a>
          <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
