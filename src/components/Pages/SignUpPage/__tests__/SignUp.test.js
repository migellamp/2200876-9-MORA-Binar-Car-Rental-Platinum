import SignUp from "..";
import { render, screen, fireEvent } from "@testing-library/react";
import AuthProviderRegister from "../../../context/authRegister";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe("Sign Up function", () => {
  test("Form Component Render Correctly", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <AuthProviderRegister>
          <SignUp />
        </AuthProviderRegister>
      </BrowserRouter>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("form-page")).toBeInTheDocument();
  });

  test("Binar Car Rental text", () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <AuthProviderRegister>
          <SignUp />
        </AuthProviderRegister>
      </BrowserRouter>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getAllByText(/binar car rental/i)).toBeTruthy();
  });

  test("Sign Up text", () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <AuthProviderRegister>
          <SignUp />
        </AuthProviderRegister>
      </BrowserRouter>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getAllByText(/sign up/i)).toBeTruthy();
  });
});
