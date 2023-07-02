import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import signcust from "../../../../image/signcust.png";
import "./style.css";
import { authContextRegister } from "../../../context/authRegister";

import { Alert } from "react-bootstrap";

const FormSignUp = () => {
  const [postAuthRegister, dataAuthRegister] = useContext(authContextRegister);
  const { message } = dataAuthRegister?.dataAuthRegister || {};
  console.log({ dataAuthRegister });

  const handleButtonRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    // console.log({ name, email, password });
    postAuthRegister({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };

  return (
    <div>
      <Container data-testid="form-page" fluid style={{ overflow: "hidden" }}>
        <Row style={{ height: "100vh" }}>
          <Col className="form-col-1" xs={6}>
            <Form onSubmit={handleButtonRegister}>
              <div
                className="box-sign-up"
                style={{ paddingLeft: 10, paddingTop: 5 }}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </Link>
              </div>
              <h2 style={{ marginBottom: "1em", fontWeight: "700" }}>
                Sign Up
              </h2>
              {message && (
                <Alert style={{ textAlign: "center" }} variant="danger">
                  {message}
                </Alert>
              )}
              <Form.Group className="mb-3 form-sign-up">
                <Form.Label className="form-label">Name*</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Nama Lengkap"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 form-sign-up"
                controlId="formBasicEmail"
              >
                <Form.Label className="form-label">Email*</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Contoh: johndee@gmail.com"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 form-sign-up"
                controlId="formBasicPassword"
              >
                <Form.Label className="form-label">Create Password*</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="6+ karakter"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="button-log"
                style={{ position: "inherit" }}
              >
                Sign Up
              </Button>
              <p style={{ margin: ".5em" }}>
                Already have an account?
                <Link to="/sign-in" style={{ textDecoration: "none" }}>
                  {" "}
                  Sign In here
                </Link>
              </p>
            </Form>
          </Col>
          <Col
            className="form-col-2"
            xs={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <div className="bg-primary">
              <img className="max-width-100" src={signcust} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormSignUp;
