"use client";
import { useForm } from '@formspree/react';
import { isValidEmail } from '@/utils/check-email';
import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactForm() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Separate error states for each field
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    emailInvalid: false,
  });

  // Formspree hook
  const [state, handleSubmit] = useForm("mvgpryog"); // Replace with your Formspree form ID

  // Handle real-time error clearing on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });

    // Clear errors based on field
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors, [name]: false };

      if (name === 'email') {
        if (value && !isValidEmail(value)) {
          newErrors.emailInvalid = true;
        } else {
          newErrors.emailInvalid = false;
        }
      }

      return newErrors;
    });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validate fields
    let hasError = false;
    const newErrors = { name: false, email: false, message: false, emailInvalid: false };
    
    if (!input.name) {
      newErrors.name = true;
      hasError = true;
    }
    if (!input.email) {
      newErrors.email = true;
      hasError = true;
    }
    if (!input.message) {
      newErrors.message = true;
      hasError = true;
    }
    if (input.email && !isValidEmail(input.email)) {
      newErrors.emailInvalid = true;
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Submit the form
    handleSubmit({
      name: input.name,
      email: input.email,
      message: input.message,
    });

    if (state.succeeded) {
      toast.success('Message sent successfully!');
      setInput({
        name: '',
        email: '',
        message: '',
      });
      setErrors({ name: false, email: false, message: false, emailInvalid: false }); // Clear errors on success
    }
  };

  return (
    <div className="w-full">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      <div className="w-full max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
        </p>
        <form onSubmit={handleFormSubmit} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-base">Your Name:</label>
            <input
              id="name"
              name="name"
              className={`bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 ${errors.name ? 'border-red-500' : ''}`}
              type="text"
              maxLength="100"
              required
              onChange={handleChange}
              value={input.name}
            />
            {errors.name && <p className="text-sm text-red-400">Name is required!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-base">Your Email:</label>
            <input
              id="email"
              name="email"
              className={`bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 ${errors.email || errors.emailInvalid ? 'border-red-500' : ''}`}
              type="email"
              maxLength="100"
              required
              onChange={handleChange}
              value={input.email}
            />
            {(errors.email || errors.emailInvalid) && <p className="text-sm text-red-400">{errors.email ? 'Email is required!' : 'Invalid email address!'}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-base">Your Message:</label>
            <textarea
              id="message"
              name="message"
              className={`bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 ${errors.message ? 'border-red-500' : ''}`}
              maxLength="500"
              required
              onChange={handleChange}
              rows="4"
              value={input.message}
            />
            {errors.message && <p className="text-sm text-red-400">Message is required!</p>}
          </div>

          <div className="flex flex-col items-center gap-2">
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              type="submit"
              disabled={state.submitting}
            >
              <span>Send Message</span>
              <TbMailForward className="mt-1" size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
