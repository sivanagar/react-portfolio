import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="m-5">
      <Row className="d-flex justify-content-around">
        <Col md="4">
          <img
            className="myImage"
            src={require("../../assets/myimage.png")}
            alt="Me!"
          />
        </Col>
        <Col md="7" className="d-flex flex-column justify-content-around">
          <h1 className="heading">About Me</h1>
          <p>
            Hello ;) I'm Sivan Kaplan, I'm a Full Stack bootcamp studet. See my
            work below!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            quaerat, eaque architecto quo sunt fugiat facere deleniti temporibus
            dolor quasi minima, delectus magni earum repudiandae, asperiores
            provident assumenda molestiae repellat. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsam minus culpa quia a alias aliquid
            at. Praesentium nihil odit culpa sapiente, sint perspiciatis nobis
            dolores aspernatur magni maiores suscipit adipisci.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
