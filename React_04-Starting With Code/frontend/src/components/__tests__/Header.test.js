import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header/Header";
import { Provider } from "react-redux";
import appStore from "../../utils/Store/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should check header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText("Bag");

  expect(cart).toBeInTheDocument();
});
