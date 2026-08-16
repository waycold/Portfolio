import React from 'react';
import { cvData } from '../data/content';

const About = () => {
  return (
    <section id="about" className="section-container bg-surface">
      <h2 className="heading-md">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          {cvData.about.bio.map((paragraph, index) => (
            <p key={index} className="text-body">
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Placeholder for an image or a stylistic block */}
        <div className="aspect-square bg-charcoal-200 rounded-md overflow-hidden flex items-center justify-center relative">
           <div className="absolute inset-0 bg-charcoal-900/5"></div>
           <p className="text-charcoal-500 text-sm font-medium">Image Placeholder</p>
        </div>
      </div>
    </section>
  );
};

export default About;
