// import emailjs from "@emailjs/browser";
import axios from "axios";
// import { init } from "@emailjs/browser";
// init("user_Seh9J6JIf4oYoVkwaaUqk");

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  console.log("req. body", name, email, message);

  const template_params = {
    user_name: name,
    user_email: email,
    message: message,
  };
  var formData = {
    service_id: "service_avb7shg",
    template_id: "template_syhwxtl",
    user_id: "user_Seh9J6JIf4oYoVkwaaUqk",
    template_params: {
      user_name: name,
      user_email: email,
      message,
    },
  };
  try {
    const data = await axios
      .post("https://api.emailjs.com/api/v1.0/email/send", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response);
          res
            .status(200)
            .end(JSON.stringify({ msg: "Message has been sent!" }));
        },
        function (error) {
          console.log("FAILED...", error);
          res.status(400).end(JSON.stringify({ msg: "Message not sent!" }));
        }
      );

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
