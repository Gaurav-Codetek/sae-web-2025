import React, { useState, useRef } from "react";
import "../Css/Form.css";
import pen from "../Asset/image.png";
import pin from "../Asset/loc.png";
import Foimg from "../Asset/formsub1.png";
import axios from "axios";
import Feedback from "../Component/Feedback";

const GlowingText = ({ children }) => (
  <span className="relative">
    <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">
      {children}
    </span>
    <span className="relative">{children}</span>
  </span>
);
export default function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState("Submit");
  const [showThankYou, setShowThankYou] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);

  const toggleForm = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
    if (!isOpen && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    console.log("Form submitted"); // You can handle form data processing here
    // Optionally reset form fields or provide success feedback
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    if (!showThankYou) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
  };

  const onSend = async () => {
    setSubmit("submitting");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/feedback`,
        {
          username: `${username}`,
          email: `${email}`,
          message: `${message}`,
        },
        {
          headers: {
            "X-API-KEY": process.env.REACT_APP_AUTH_KEY,
          },
        }
      );
      const data = response.data;
      setSubmit("Submitted");
      console.log(data);
      setTimeout(()=>{
        setSubmit("Submit");
      },3000)
      setIsOpen(false);
      setShowThankYou(true);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="text-white m-5 overflow-hidden relative z-[0] mb-5">
        <p className="text-5xl font-bold mb-8 text-center" id="pcontact">
          <span className="relative">
            <span className="relative">
              <GlowingText>Contact Us!</GlowingText>
            </span>
          </span>
        </p>
        <div className="addrbox grid gap-8 sm:grid-cols-2">
          <div className="gmail relative p-6 border border-blue-500/30 rounded-xl bg-black/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-300">
            <div className="absolute inset-0 bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
            <div className="relative flex flex-col items-center gap-4">
              <img className="w-8 h-8" id="loc" src={pen} alt="Location Icon" />
              <div className="flex flex-col items-center">
                <p className="text-lg font-semibold" id="write">
                  Write Us
                </p>
                <button
                  id="mail"
                  className="text-blue-500 hover:text-blue-400 transition underline"
                  onClick={toggleForm}
                >
                  Write a Feedback
                </button>
                <p className="text-sm m-3" id="saemail">
                  Email :- admin@saeuietpu.in
                </p>
              </div>
            </div>
          </div>
          <div className="gmap relative p-6 border border-blue-500/30 rounded-xl bg-black/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-300">
            <div className="absolute inset-0 bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
            <div className="relative flex flex-col items-center gap-4">
              <img className="w-8 h-8" id="loc" src={pin} alt="Location Icon" />
              <div className="flex flex-col items-center">
                <p className="text-lg font-semibold" id="visit">
                  Visit Us
                </p>
                <a
                  href="https://www.google.com/maps/place/UIET+Punjab+University/@30.7480771,76.7545404,17z/data=!3m1!4b1!4m6!3m5!1s0x390febffe47a7419:0x267dc179dae933b6!8m2!3d30.7480771!4d76.7571153!16s%2Fg%2F11m468rsbt?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"
                  id="map"
                  className="text-blue-500 hover:text-blue-400 transition underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions!
                </a>
                <p className="text-sm m-3" id="saeloc">
                  University Institute of Engineering and Technology, PU,
                  Chandigarh, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div
        ref={formRef}
        className={`form-wrapper ${isOpen ? "open" : "closed"}`}
      >
        <div className="gform">
          <div className="formimg">
            <img id="foimg" src={Foimg} alt="Form Image" />
          </div>
          <form className="formsae" onSubmit={handleFormSubmit}>
            <label htmlFor="name"></label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
            />

            <label htmlFor="email"></label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />

            <label htmlFor="msg"></label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="msg"
              rows="6"
              cols="50"
              placeholder="Write your message"
            ></textarea>

            <div className="fbtn">
              <button onClick={onSend} type="submit" className="subbtn">
                {submit}
              </button>
              <button type="button" className="closef" onClick={toggleForm}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
      <Feedback isOpen={showThankYou} onClose={handleCloseThankYou} />
    </>
  );
}
