import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Auth/Login";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/Store/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should clear inputs when form is Submitted", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Login />
      </Provider>
    </BrowserRouter>
  );

  const emailInput = screen.getByTestId("input-email");
  const passInput = screen.getByTestId("input-pass");
  const button = screen.getByRole("button");

  userEvent.type(emailInput, "test2@gmail.com");
  userEvent.type(passInput, "test2@2000");
  userEvent.click(button);

  expect(passInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
