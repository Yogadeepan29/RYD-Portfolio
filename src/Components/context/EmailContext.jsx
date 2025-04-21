// src/context/EmailContext.jsx
import { createContext, useContext } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export const EmailContext = createContext();  

export const EmailProvider = ({ children }) => {
  const sendEmail = async (formElement) => {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const replyTemplateID = import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID;

    // Convert FormData to a plain object
    const formData = new FormData(formElement);
    const formDataObj = Object.fromEntries(formData.entries());

    const emailParams = {
      user_name: formDataObj.user_name,
      user_email: formDataObj.user_email,
      subject: formDataObj.subject,
      message: formDataObj.message,
    };

    try {
      // Send main contact email
      await emailjs.send(serviceID, templateID, emailParams, publicKey);
      toast.success("Message sent successfully!");
      // Send auto-reply
      await emailjs.send(serviceID, replyTemplateID, emailParams, publicKey);
      return { success: true };
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
      return { success: false, error };
    }
  };

  return (
    <EmailContext.Provider value={{ sendEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

 