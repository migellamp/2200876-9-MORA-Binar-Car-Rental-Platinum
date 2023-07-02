import React, { useContext } from "react";
import FormSignUp from "./FormSignUp";

import { authContextRegister } from "../../context/authRegister";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [, dataAuthRegister] = useContext(authContextRegister);
  const { id } = dataAuthRegister?.dataAuthRegister || {};
  const navigate = useNavigate();
  if (id) navigate("/sign-in");
  return <FormSignUp />;
};

export default SignUp;
