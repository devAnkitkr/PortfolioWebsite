import { SMTPClient } from "emailjs";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const user = process.env.EMAIL;
  const password = process.env.PASSWORD;

  console.log("mesasge", message);

  const client = new SMTPClient({
    user,
    password,
    host: "smtp.gmail.com",
    ssl: true,
  });
  console.log("user email id", email);
  try {
    const data = await client.sendAsync({
      text:
        "name: " +
        name +
        "\n" +
        "email: " +
        email +
        "\n" +
        "message: " +
        message,
      from: email,
      to: user,
      subject: "www.devankitkr.com",
    });
    console.log(data);
    res.status(200).end(JSON.stringify({ msg: "Message has been sent!" }));
  } catch (error) {
    console.log(error);
  }
}
