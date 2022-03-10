import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    var data = {
      service_id: 'service_avb7shg',
      template_id: 'template_syhwxtl',
      user_id: 'user_Seh9J6JIf4oYoVkwaaUqk',
      template_params: {
          'user_name': 'James',
          'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
      }
  };

    emailjs
      .sendForm(
        "service_avb7shg",
        "template_syhwxtl",
        form.current,
        "user_Seh9J6JIf4oYoVkwaaUqk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
