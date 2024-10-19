// src/Components/Home.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {
  return (
    <Container fluid className="p-0">
      <header className="bg-primary text-white text-center py-5">
        <h1>Welcome to My Profile!</h1>
        <p className="lead">
        Hi! I’m Adrian John Garcia, a computer science student passionate about coding, technology, and innovation. I’m constantly learning and growing, with a focus on developing skills that will allow me to solve real-world problems using technology.
        </p>
      </header>
      <About />
      <Skills />
      <Contact />
    </Container>
  );
}

export default Home;
