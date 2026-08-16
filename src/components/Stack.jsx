import React from 'react';
import { cvData } from '../data/content';

const Stack = () => {
  return (
    <section id="stack" className="section-container">
      <h2 className="heading-md">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {cvData.stack.map((group, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-sm font-semibold tracking-widest text-charcoal-400 uppercase mb-5 border-b border-charcoal-800 pb-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="px-3 py-1.5 bg-surface text-charcoal-50 text-sm font-medium rounded-md border border-charcoal-800 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
