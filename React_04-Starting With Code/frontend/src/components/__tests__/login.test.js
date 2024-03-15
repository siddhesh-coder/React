import { BrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import { Provider } from "react-redux";
import appStore from "../../utils/Store/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Toaster } from "react-hot-toast";
import { act } from "react-dom/test-utils";

describe("Login", () => {
  it("renders login component", () => {
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Login />
          </Provider>
          <Toaster />
        </BrowserRouter>
    );

    expect(screen.getByText("Login to your account")).toBeInTheDocument();
  });

  it("Should return to home page after login", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Login />
          </Provider>
        </BrowserRouter>
      )
    );

    const emailInput = screen.getByTestId("input-email");
    const passInput = screen.getByTestId("input-pass");
    const submitBtn = screen.getByRole("button", { name: "Log in" });

    await act( async ()=>{
      fireEvent.change(emailInput, { target: { value: "Test1@gmail.com" } });
      fireEvent.change(passInput, { target: { value: "Test1@tryout" } });
  
      fireEvent.click(submitBtn);
    })
  });
});
