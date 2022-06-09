import React, { useRef } from "react";
import contactImg from "../../images/handShake.jpg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w0vtaot",
        "template_uicxhtg",
        form.current,
        "VLJFkh3MhUPPnN6QY"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset()
          toast.success("Your email is success.")
        },
        (error) => {
          console.log(error.text);
          toast.error("Your email is faild.")
        }
      );
  };
  return (
    <section className="mt-20" id='contact-me'>
      <h1 className="text-3xl text-center font-bold text-[#ff4321]">CONTACT ME</h1>

      <div className='lg:flex items-center'>
        <div className='flex1'>
          <img className='w-10/12 rounded-xl shadow-xl mx-auto mt-10 lg:mt-0' src={contactImg} alt="" />
        </div>

        <div className='flex1'>
          <form className="body-font relative" ref={form} onSubmit={sendEmail}>
            <div className="container px-8 lg:px-0 py-10 lg:py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-7">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                  You can send an email.
                </h1>
              </div>
              <div className="">
                <div className="flex flex-wrap ">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="name"
                        className="leading-7 text-sm "
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        required
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-warning text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="email"
                        className="leading-7 text-sm"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        required
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-warning text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        for="message"
                        className="leading-7 text-sm"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-warning h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="mx-auto mt-3">
                    <input
                      className="cursor-pointer rounded border  h-10 w-24 outline-none btn btn-warning"
                      type="submit" value='SEND'
                    />
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactMe;
