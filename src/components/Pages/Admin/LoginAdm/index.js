import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import adminlog from "../../../../image/adminlog.png";
import { AuthContext } from "../../../context/auth";
import { Navigate } from "react-router-dom";

const LoginAdm = () => {
  const [postAuth, data] = useContext(AuthContext);
  const { loading } = data;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    postAuth({ email: email.value, password: password.value }, "Admin");
    console.log("Login successful!");
  };

  if (document.cookie.includes("uidTokenBinarApp") === true)
    return <Navigate to={"/admin/dashboard"} />;

  // const role = localStorage.getItem("role");

  // if (role == "Admin") return <Navigate to="/admin/dashboard"></Navigate>;

  return (
    <div className="d-flex">
      <div className="col-8 bg-primary">
        <img className="w-100 vh-100" src={adminlog} />
      </div>
      <div className="d-flex justify-content-center align-items-center vh-100 col-4">
        <Form onSubmit={handleOnSubmit}>
          <h3>Welcome Back Admin BCR!</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
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
        </Form>
      </div>
    </div>
  );
};

export default LoginAdm;
