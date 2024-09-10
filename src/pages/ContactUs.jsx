import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

const ContactUsForm = () => {
  const form = useRef();
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_em1tdrk", "template_xu7iukf", form.current, {
        publicKey: "QUFjR4MItj2zOTLbg",
      })
      .then(
        (result) => {
          console.log("Sent successfully!", result.text);
          setNotification("Your message has been sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log("Failed to send", error.text);
          setNotification("Failed to send your message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>

      <div className="bg-[#ECE8E1] flex items-center justify-center min-h-screen px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-xl lg:max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
            Contact Us
          </h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 p-6 bg-white"
          >
            <div>
              <label
                htmlFor="user_name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>

            {notification && (
              <div
                className={`mt-4 p-3 rounded-md text-center ${
                  notification.includes("Failed")
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {notification}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
