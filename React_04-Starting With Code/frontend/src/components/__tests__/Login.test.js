import { render, screen } from "@testing-library/react";
import Login from "../Auth/Login";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/Store/appStore";

test("heading Loaded", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Login />
      </Provider>
    </BrowserRouter>
  );

  const testingForm = screen.getByTestId("login-window");

  expect(testingForm).toBeInTheDocument();
});
