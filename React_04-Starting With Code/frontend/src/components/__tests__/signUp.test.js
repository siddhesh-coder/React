import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/Store/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Toaster } from "react-hot-toast";
import { act } from "react-dom/test-utils";
import SignUp from "../Auth/SignUp";

it("should load the header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <SignUp />
      </Provider>
      <Toaster />
    </BrowserRouter>
  );

  const header = screen.getByTestId("signup-header");

  expect(header).toBeInTheDocument();
});

it("should check all inputs fields", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <SignUp />
      </Provider>
      <Toaster />
    </BrowserRouter>
  );

  const name = screen.getByTestId("name-test");
  const email = screen.getByTestId("email-test");
  const password = screen.getByTestId("password-test");
  const confirmPassword = screen.getByTestId("confirmPass-test");
  const submitBtn = screen.getByRole("button", { name: "Sign up" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(confirmPassword).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
});

it("should check all inputs fields", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <SignUp />
        </Provider>
        <Toaster />
      </BrowserRouter>
    )
  );

  const name = screen.getByTestId("name-test");
  const email = screen.getByTestId("email-test");
  const password = screen.getByTestId("password-test");
  const confirmPassword = screen.getByTestId("confirmPass-test");
  const submitBtn = screen.getByRole("button", { name: "Sign up" });

  await act(async () => {
    fireEvent.change(name, { target: { value: "Test1" } });
    fireEvent.change(email, { target: { value: "Test1@gmail.com" } });
    fireEvent.change(password, { target: { value: "Test1@tryout" } });
    fireEvent.change(confirmPassword, { target: { value: "Test1@tryout" } });
  });

  await act(async () => fireEvent.click(submitBtn));

  expect(window.location.pathname).toBe('/');
});
