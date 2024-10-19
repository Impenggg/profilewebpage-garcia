// src/Components/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="mb-4">About Me</h2>
            <p className="lead">
            I'm a dedicated computer science student with a strong passion for technology and problem-solving. I’m currently pursuing my degree, where I've developed a solid foundation in programming, algorithms, and software development. Outside of academics, I love working on personal coding projects and exploring the latest trends in tech.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
