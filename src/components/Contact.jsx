"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {FaCheck, FaLinkedin, FaEnvelope, FaSpinner, FaPaperPlane, FaGithub, FaPhone, FaWhatsapp} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();

      // Reset state back to idle after 4 seconds
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (

    <div id="contact" className="scrool-mt-24 bg-green-50 dark:bg-[#06052e]">
      {/* Header */}

      <div className="text-center pt-8  pb-10">
        <h2
          className=" mt-5 text-4xl sm:text-5xl font-black tracking-tigh 
              dark:text-white">
          Get <span className="text-blue-400">In Touch</span>
        </h2>

        <p className="
            mt-4 max-w-xl mx-auto text-sm sm:text-base dark:text-white">
          Have a project idea or want to collaborate?
          Drop me a message and I'll get back to you.
        </p>
      </div>


      <section className="pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch auto-rows-fr">

          {/* LEFT SIDE - Contact Form */}
          <div className="lg:col-span-5 bg-[#0f0e38] h-full text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between">

            <div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Let's start a conversation
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Whether you're looking to collaborate, have a question,
                or just want to connect, I'm here and ready to help bring
                your ideas to life.
              </p>

              <div className="space-y-4 mb-8">

                {/* EMAIL */}
                <div className="flex items-center gap-4 p-4 min-h-[72px] rounded-2xl bg-[#1e1c53] border border-indigo-900/40 hover:border-indigo-500/50 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#2b286f] flex items-center justify-center shrink-0">
                    <FaEnvelope />
                  </div>
                  <div className="overflow-hidden">

                    <p className="text-xs text-slate-400">
                      Email me at
                    </p>
                    <a
                      href="mailto:wahidzamanpg@gmail.com"
                      className="text-sm font-semibold hover:underline truncate block"
                    >
                      wahidzamanpg@gmail.com
                    </a>
                  </div>
                </div>


                {/* PHONE */}
                <div className="flex items-center gap-4 p-4 min-h-[72px] rounded-2xl bg-[#1e1c53] border border-indigo-900/40 hover:border-indigo-500/50 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#2b286f] flex items-center justify-center shrink-0">
                    <FaPhone />
                  </div>

                  <div className="overflow-hidden">
                    <p className="text-xs text-slate-400">
                      Call me at
                    </p>
                    <a
                      href="tel:+8801752187286"
                      className="text-sm font-semibold hover:underline truncate block"
                    >
                      +880 1752-187286
                    </a>
                  </div>
                </div>


                {/* WHATSAPP */}
                <div className="flex items-center gap-4 p-4 min-h-[72px] rounded-2xl bg-[#1e1c53] border border-indigo-900/40 hover:border-indigo-500/50 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#2b286f] flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-green-400" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-slate-400">
                      WhatsApp me 
                    </p>

                    <a
                      href="https://wa.me/8801752187286"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 text-sm font-semibold hover:text-cyan-500 truncate"
                    >
                      Chat on WhatsApp  <IoIosSend  size={20}/>
                    </a>
                  </div>
                </div>

                {/* SOCIAL LINKS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* GITHUB */}
                  <div className="flex items-center gap-4 p-4 min-h-[72px] rounded-2xl bg-[#1e1c53] border border-indigo-900/40 hover:border-indigo-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#2b286f] flex items-center justify-center shrink-0">
                      <FaGithub />
                    </div>

                    <div>
                      <a
                        href="https://github.com/WahiduzzamanSakib"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold hover:underline"
                      >
                        Github
                      </a>
                    </div>
                  </div>

                  {/* LINKEDIN */}
                  <div className="flex items-center gap-4 p-4 min-h-[72px] rounded-2xl bg-[#1e1c53] border border-indigo-900/40 hover:border-indigo-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#2b286f] flex items-center justify-center shrink-0">
                      <FaLinkedin className="text-blue-400" />
                    </div>

                    <div>
                      <a
                        href="https://www.linkedin.com/in/waheduzzaman-md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold hover:underline"
                      >
                        Linkedin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STATUS */}
            <div className="mt-8 p-3 rounded-xl bg-[#1a1848] border border-indigo-900/30 flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>
                Available for freelance & collaboration
              </span>
            </div>
          </div>

          {/* RIGHT SIDE - Information Panel */}
          <div className="lg:col-span-7 bg-[#9da5b4] h-full text-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center mb-2 gap-2 text-2xl sm:text-3xl font-bold  text-slate-900">
                <span className="w-3 h-3  rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                <h2>Send me a message</h2>
              </div>

              {/* Form */}
              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#c5cbd3] text-slate-900 placeholder-slate-500 border border-transparent focus:border-indigo-500 focus:bg-white focus:outline-none transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#c5cbd3] text-slate-900 placeholder-slate-500 border border-transparent focus:border-indigo-500 focus:bg-white focus:outline-none transition-all duration-200"
                  />
                </div>


                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project discussion / Collaboration"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#c5cbd3] text-slate-900 placeholder-slate-500 border border-transparent focus:border-indigo-500 focus:bg-white focus:outline-none transition-all duration-200"
                  />
                </div>


                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    name="message" rows={4} required
                    placeholder="Tell me about your project, collaboration ideas,"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#c5cbd3] text-slate-900 placeholder-slate-500 border border-transparent focus:border-indigo-500 focus:bg-white focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-semibold text-red-600">
                    {errorMessage}
                  </p>
                )}

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: status === "idle" ? 1.01 : 1 }}
                  whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                  disabled={status === "loading" || status === "success"}
                  type="submit"
                  className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${status === "success"
                    ? "bg-emerald-600"
                    : "bg-[#3331b2] hover:bg-[#282693]"
                    }`}
                >
                  {status === "loading" && (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <FaCheck />
                      Message Sent!
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      Send Message <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}