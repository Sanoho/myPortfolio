import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    scroll-snap-align: none;
  }
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
  z-index: 1;

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
  z-index: 1;

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

  const formSchema = yup.object().shape({
    name: yup.string().required("Please enter a name"),
    email: yup.string().email("Invalid email").required("required"),
    message: yup.string().required("required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, helpers) => {
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
      helpers.resetForm();
    },
  });

  return (
    <Section>
      <Container id="contact">
        <Left>
          <Form ref={ref} onSubmit={formik.handleSubmit}>
            <Title>Contact Me</Title>
            <Input
              placeholder="Name"
              name="name"
              required
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <Input
              placeholder="Email"
              name="email"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <TextArea
              placeholder="Write your message"
              name="message"
              required
              value={formik.values.message}
              rows={10}
              onChange={formik.handleChange}
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
