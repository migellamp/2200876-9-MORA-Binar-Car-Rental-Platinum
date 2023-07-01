import React, { useContext } from 'react'
import Button from "react-bootstrap/Button";
import { AuthContext } from '../../../context/auth';
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";
import signcust from "../../../../image/signcust.png"

const FormView = () => {
  const [postAuth, data] = useContext(AuthContext);
  const { loading } = data;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    postAuth({ email: email.value, password: password.value }, "Customer");
    console.log("Login successful!");
  
  };
  const role = localStorage.getItem('role')
  if (document.cookie !== "" && role == "Customer") return <Navigate to={'/'} />

  return (
    <div className="d-flex w-100">
      <div className="d-flex justify-content-center align-items-center vh-100 col-6">
        <Form onSubmit={handleOnSubmit}>
          <h3>Welcome Back!</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We&#39;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button className="btn btn-primary btn-block w-100" type="submit">
            {loading ? "Loading . . ." : "Sign In"}
          </Button>
          <p className="text-center">
            Don’t have an account?
            <Link to="/Admin"> Sign Up for free</Link>
          </p>
        </Form>
      </div>
      <div className="col-8 bg-primary" >
      <img className="max-width-100" src={signcust} />
        </div>
    </div>
  );
};

export default FormView;
