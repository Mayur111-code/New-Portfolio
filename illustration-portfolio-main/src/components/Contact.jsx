import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [loading, setLoading] = useState(false);

  // -------------------------------
  // SEND EMAIL FUNCTION
  // -------------------------------
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0tr9xph", // <--- Replace if needed
        "template_lwg49vq",
        formRef.current,
        "NH63AjAgr9XeSosyj"
      )
      .then(() => {
        setLoading(false);
        setToast({
          show: true,
          message: "Your message has been successfully sent! 🚀",
          type: "success",
        });
        formRef.current.reset();
        hideToast();
      })
      .catch(() => {
        setLoading(false);
        setToast({
          show: true,
          message: "Failed to send message. Try again!",
          type: "error",
        });
        hideToast();
      });
  };

  const hideToast = () => {
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  return (
    <>
      {/* --------------------------- */}
      {/* PREMIUM TOAST NOTIFICATION */}
      {/* --------------------------- */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-5 right-5 z-50 px-5 py-4 rounded-xl shadow-xl text-white flex items-center gap-3 font-semibold
              ${
                toast.type === "success"
                  ? "bg-green-600 border border-green-400"
                  : "bg-red-600 border border-red-400"
              }
            `}
          >
            {toast.type === "success" ? (
              <AiOutlineCheckCircle size={28} />
            ) : (
              <AiOutlineCloseCircle size={28} />
            )}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:my-16 lg:px-28 my-8 px-5"
        id="contact"
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl lg:text-4xl text-center"
        >
          Contact <span className="font-extrabold">Me</span>
        </motion.h2>

        <div className="flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row">
          {/* --------------------------- */}
          {/* CONTACT FORM */}
          {/* --------------------------- */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[40%]"
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="w-full space-y-3 lg:space-y-5"
            >
              <input
                name="name"
                className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
                type="text"
                placeholder="Your name"
                required
              />

              <input
                name="email"
                className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
                type="email"
                placeholder="Email"
                required
              />

              <input
                name="website"
                className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
                type="text"
                placeholder="Your website (If exists)"
              />

              <textarea
                name="message"
                className="resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full"
                placeholder="How can I help?*"
                required
              ></textarea>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  disabled={loading}
                  className="bg-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-5 py-3 rounded flex items-center gap-x-3 font-medium"
                >
                  {loading ? (
                    <>
                      <AiOutlineLoading3Quarters className="animate-spin" /> Sending...
                    </>
                  ) : (
                    "Get In Touch"
                  )}
                </motion.button>

                {/* SOCIAL ICONS */}
                <div className="flex items-center gap-x-2 lg:gap-x-5">
                  {[
                    {
                      Icon: BiLogoGmail,
                      link: "mailto:mayurborse7440@gmail.com",
                    },
                    {
                      Icon: IoLogoLinkedin,
                      link: "https://linkedin.com/in/your-link",
                    },
                    {
                      Icon: IoLogoTwitter,
                      link: "https://twitter.com/your-link",
                    },
                    { Icon: BsGithub, link: "https://github.com/your-link" },
                  ].map(({ Icon, link }, index) => (
                    <motion.a
                      key={index}
                      href={link}
                      target="_blank"
                      className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </form>
          </motion.div>

          {/* --------------------------- */}
          {/* RIGHT SIDE CONTACT INFO */}
          {/* --------------------------- */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3">
              <h2>
                Let's{" "}
                <span
                  className="text-white"
                  style={{ WebkitTextStroke: "1px black" }}
                >
                  talk
                </span>{" "}
                for
              </h2>
              <h2>Something special</h2>
            </div>

            <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly experiences.
            </p>

            <div className="font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4">
              <motion.a
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 group"
                href="mailto:mayurborse7440@gmail.com"
              >
                <span className="border-2 transition-all border-transparent group-hover:border-black rounded-full p-1">
                  <IoMdMail className="w-5 h-5" />
                </span>
                mayurborse7440@gmail.com
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 group"
                href="tel:7028507985"
              >
                <span className="border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]">
                  <FaPhone className="w-4 h-4" />
                </span>
                7028507985
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
