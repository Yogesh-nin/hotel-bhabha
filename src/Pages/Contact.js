import React from "react";

//components
import ContactUs from "../Components/Contact";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Header from "../Components/Header/index";

function Contact() {
  return (
    <>
      <Header />
      <ContactUs />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
