import { useState, useEffect } from "react";
import { IconSvg } from "../IconSvg/iconsvg";
import axios from "axios";

const ContactSection = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const validate = ({ name, email, message }) => {
    if (name == "" || email == "" || message == "") {
      return false;
    }
    return true;
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
    setError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate({ ...state }) === true) {
      console.log("state value on submition", state);
      const { email, name, message } = state;
      await axios
        .post("http://localhost:3000/api/email", { name, email, message })
        .then((res) => {
          if (res.status == 200) {
            alert(res.data.msg);
          } else alert("Message not sent");
          setState({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((e) => console.log(e));
    } else setError("one of the field is empty *");
  };
  return (
    <section id="contact">
      <div className="flex flex-col py-20 items-center justify-center min-h-screen max-w-screen-lg px-6 lg:px-0 mx-auto">
        <h1 className="mb-1 font-bold text-2xl text-primary">Contact</h1>
        <span className="text-gray-500 pb-20 text-secondary">Get in touch</span>
        <div className="flex flex-col w-full lg:flex-row lg:justify-between">
          <div className="mb-10">
            <div className="flex items-center mb-5">
              <span>{IconSvg.CallMeIcon}</span>
              <span className="flex flex-col items-start justify-center pl-2">
                <h2 className="font-bold text-lg text-primary">Call me</h2>
                <p className="text-secondary">9958071589</p>
              </span>
            </div>
            <div className="flex items-center mb-5">
              <span>{IconSvg.EmailIcon}</span>
              <span className="flex flex-col pl-2">
                <h2 className="font-bold text-lg text-primary">Email</h2>
                <p className="text-secondary">itsmeankit12feb@gmail.com</p>
              </span>
            </div>
            <div className="flex items-center mb-5">
              <span>{IconSvg.LocationIcon}</span>
              <span className="flex flex-col pl-2">
                <h2 className="font-bold text-lg text-primary">Location</h2>
                <p className="text-secondary">
                  Shalimar garden Ghaziabad,India
                </p>
              </span>
            </div>
          </div>
          <div>
            <form>
              <div className="border rounded flex flex-col bg-secondary px-3 py-2 mb-5">
                <label className="text-secondary">Name</label>
                <input
                  type="name"
                  name="name"
                  required
                  value={state.name}
                  onChange={handleChange}
                  className="bg-secondary text-primary focus:text-primary"
                />
              </div>
              <div className="border rounded flex flex-col bg-secondary text-primary px-3 py-2 mb-5">
                <label className="text-secondary">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={state.email}
                  onChange={handleChange}
                  className="bg-secondary text-primary focus:text-primary"
                />
              </div>
              <div className="border rounded flex flex-col bg-secondary px-3 py-2 mb-5">
                <label htmlFor="message" className="text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  cols="50"
                  className="bg-secondary text-primary focus:text-primary"
                  value={state.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                className="bg-accent text-accent font-bold flex py-3 my-4 px-4 rounded ease-in duration-150 hover:bg-yellow-500 hover:scale-105"
                onClick={handleSubmit}
              >
                Send Message
                <span className="ml-2 origin-center rotate-90">
                  {IconSvg.SendButtonIcon}
                </span>
              </button>
            </form>
            {error !== "" && (
              <span className="text-red-700 hue-rotate-15 p-2 rounded">
                {error}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
