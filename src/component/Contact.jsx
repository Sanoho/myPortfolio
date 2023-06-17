import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Copyright = styled.h5`
  position: relative;
  bottom: 60px;
  text-align: center;
  letter-spacing: 1px;
`;

const Contact = () => {
  const ref = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ms8n5u",
        "template_idpxtut",
        ref.current,
        "EVD3vjfFo1e_k8qIt"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast(
            "Your message has been sent.  I will get back with you soon =).",
            {
              autoClose: 3000,
              position: "bottom-right",
              theme: "dark",
            }
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast(`Something went wrong!! Try again.`, {
            hideProgressBar: false,
            autoClose: 3000,
            type: "error",
            theme: "dark",
          });
        }
      );
  };

  return (
    <Section>
      <Container id="contact">
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <TextArea
              placeholder="Write your message"
              name="message"
              value={form.message}
              rows={10}
              onChange={handleChange}
            />
            <Button type="submit">Send</Button>
          </Form>
          <ToastContainer />
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
      <Copyright>© 2023 Tim Hoang</Copyright>
    </Section>
  );
};

export default Contact;
