"use client"; 

import React from 'react';

interface ContactProps {}

export default function Contact({}: ContactProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-24 px-6 w-full bg-[#0b0b0f]/70 backdrop-blur-sm text-white">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-neutral-400 mt-2 text-sm">Have a project in mind? Let's discuss.</p>
        </div>

        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="access_key" value="1addd649-8ab6-4898-a1d7-8592730cd69c" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-xl focus:border-blue-500 outline-none transition-colors" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-xl focus:border-blue-500 outline-none transition-colors" 
            />
          </div>
          
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows={4} 
            required 
            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-xl focus:border-blue-500 outline-none transition-colors resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-600/20 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}