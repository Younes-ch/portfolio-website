import { useRef, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import Input from "../common/Input";
import Title from "../common/Title";
import Button from "../common/Button";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    toast.promise(
      emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID as string,
        "template_vopeyu9",
        form.current as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      ),
      {
        pending: {
          render() {
            return "Sending Message...";
          },
          draggable: false,
          transition: Slide,
          position: "bottom-right",
          theme: "dark",
        },
        success: {
          render() {
            return "Message sent!";
          },
          draggable: true,
          draggableDirection: "x",
        },
        error: {
          render() {
            return <b>Something went wrong!</b>;
          },
        },
      }
    );
  };

  return (
    <div className="contact-sc resume-block">
      <div className="container">
        <div className="contact-content dotted-border-left">
          <Title titleText="Contact" />
          <div className="contact-list grid">
            <form ref={form} onSubmit={sendEmail}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                className="input text"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button text="Send" onClick={() => {}} />
            </form>
          </div>
          <ToastContainer />
          <div className="dots-shape"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
