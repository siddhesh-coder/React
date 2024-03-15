import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/Store/appStore";
import RestaurantMenu from "../Menu/RestaurantMenu";
import FoodCart from "../Cart/FoodCart";
import Header from "../Header/Header";
import CartItems from "../Cart/CartItems";
import MOCK_DATA from "../mocks/RestaurantMenu.json";
import MOCK_ITEM from "../mocks/cartItem.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_ITEM),
  })
);

// Mock the useMenu hook
jest.mock("../../hooks/useMenu", () => ({
  __esModule: true,
  default: jest.fn(),
}));

window.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("cart check", () => {
  beforeEach(() => {
    // Mock the return value of useMenu hook
    jest.requireMock("../../hooks/useMenu").default.mockReturnValue(MOCK_DATA);
  });

  it("Should track cart item count", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );

    const addBtn = screen.getAllByTestId("add-test");
    const cartCount = screen.getByTestId("cart-count");

    expect(cartCount.textContent).toBe("0Bag");

    fireEvent.click(addBtn[0]);
    expect(cartCount.textContent).toBe("1Bag");

    fireEvent.click(addBtn[1]);
    expect(cartCount.textContent).toBe("2Bag");
  });

  it("Should load cart with 2 items in it as per prev test", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <FoodCart />
          </Provider>
        </BrowserRouter>
      )
    );

    await act(async () => {
      const cartCount = screen.getByTestId("cart-count");
      fireEvent.click(cartCount);
    });

    const items = screen.getAllByTestId("item-test");

    expect(items.length).toBe(2);
  });

  it("Should clear cart and respond to all functions", async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <FoodCart />
        </Provider>
      </BrowserRouter>
    );

    await act(async () => {
      const items = screen.getAllByTestId("item-test");
      expect(items.length).toBe(2);

      fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
    });

    const toggleCart = screen.getByTestId("toggle-cart");
    fireEvent.click(toggleCart);

    // Rerendering the component to reflect changes
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <FoodCart />
        </Provider>
      </BrowserRouter>
    );

    // Making assertions after the updates have completed
    const updatedItems = screen.queryAllByTestId("item-test");
    expect(updatedItems.length).toBe(0);
  });

  it("Should minus, plus and remove the item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <CartItems cartItems={MOCK_ITEM} />
        </Provider>
      </BrowserRouter>
    );

    const plus = screen.getAllByTestId("plus");
    fireEvent.click(plus[0]);

    const minus = screen.getAllByTestId("minus");
    fireEvent.click(minus[0]);

    const remove = screen.getAllByTestId("remove");
    fireEvent.click(remove[0]);
  });
});
