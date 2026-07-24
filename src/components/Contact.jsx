import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kn8aqjq', // Your Service ID
        'template_l4knhwn', // Replace with your Template ID
        formRef.current,
        '8EYx2bh7SJlvVSPgP' // Replace with your Public Key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          alert('Failed to send message!');
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="contact"
    >
      <div className="bg-surface-container rounded-xl overflow-hidden border border-surface-bright shadow-2xl">
        <div className="p-10 md:p-20">

          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Get In Touch
            </h2>

            <p className="text-secondary font-label-mono text-sm mt-2">
              Contact Me
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">

            {/* LEFT SIDE */}
            <div className="space-y-10">

              <h3 className="text-center font-headline-md text-2xl text-primary">
                Talk to me
              </h3>

              <div className="space-y-6">

                {/* Email Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-background border border-surface-bright p-8 rounded text-center group hover:border-secondary transition-all"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-all">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      mail
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider">
                    Email
                  </h4>

                  <p className="text-xs text-on-surface-variant mt-2 mb-6">
                    wahidzamanpg@gmail.com
                  </p>

                  <a
                    className="inline-flex items-center gap-2 text-sm text-secondary hover:underline transition-all"
                    href="mailto:wahidzamanpg@gmail.com"
                  >
                    Write me
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </motion.div>

                {/* LinkedIn Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-background border border-surface-bright p-8 rounded text-center group hover:border-secondary transition-all"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-all">

                    {/* LinkedIn SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-secondary"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.83v2.12h.05c.53-1 1.83-2.12 3.77-2.12 4.03 0 4.78 2.65 4.78 6.1v9.42h-4v-8.36c0-2-.04-4.58-2.79-4.58-2.8 0-3.23 2.18-3.23 4.44v8.5h-4V7.98z"/>
                    </svg>

                  </div>

                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider">
                    LinkedIn
                  </h4>

                  <p className="text-xs text-on-surface-variant mt-2 mb-6">
                    Md. Waheduzzaman
                  </p>

                  <a
                    className="inline-flex items-center gap-2 text-sm text-secondary hover:underline transition-all"
                    href="https://www.linkedin.com/in/waheduzzaman-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </motion.div>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-10">

              <h3 className="text-center font-headline-md text-2xl text-primary">
                 Let's Work Together
              </h3>

              <form
                ref={formRef}
                className="space-y-8"
                onSubmit={sendEmail}
              >

                {/* Name */}
                <div className="relative">
                  <label className="absolute -top-3 left-4 px-2 bg-surface-container text-[11px] uppercase font-label-mono text-secondary z-10">
                    Name
                  </label>

                  <input
                    name="user_name"
                    className="w-full bg-background border border-surface-bright rounded p-5 text-primary focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all placeholder:text-on-surface-variant/30 outline-none"
                    placeholder="Insert your Name"
                    type="text"
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="absolute -top-3 left-4 px-2 bg-surface-container text-[11px] uppercase font-label-mono text-secondary z-10">
                    Email
                  </label>

                  <input
                    name="user_email"
                    className="w-full bg-background border border-surface-bright rounded p-5 text-primary focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all placeholder:text-on-surface-variant/30 outline-none"
                    placeholder="Insert your email"
                    type="email"
                    required
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="absolute -top-3 left-4 px-2 bg-surface-container text-[11px] uppercase font-label-mono text-secondary z-10">
                    Write Your Message
                  </label>

                  <textarea
                    name="message"
                    className="w-full bg-background border border-surface-bright rounded p-5 text-primary focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all placeholder:text-on-surface-variant/30 outline-none"
                    placeholder="Write your message"
                    rows="6"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-secondary text-on-secondary font-bold py-5 rounded hover:opacity-90 transition-all group flex items-center justify-center gap-3 shadow-xl"
                  type="submit"
                >
                  Send Message

                  <span className="material-symbols-outlined group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    send
                  </span>
                </motion.button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;