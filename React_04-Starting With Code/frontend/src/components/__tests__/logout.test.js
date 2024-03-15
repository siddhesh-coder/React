import { BrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Login from "../Auth/Login";
import { Provider } from "react-redux";
import appStore from "../../utils/Store/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <Login />
      </Provider>
    </BrowserRouter>
  );

  const logoutBtn = screen.getByTestId("logout-btn");
  fireEvent.mouseEnter(logoutBtn);

  const logout = screen.getByTestId("logout");
  fireEvent.click(logout);

  expect(screen.getByText("Login to your account")).toBeInTheDocument();
});
