import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FoodCards from "../Home/FoodCards";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/Store/appStore";
import { Provider } from "react-redux";
import MOCK_DATA from "../mocks/restroFeed.json";
import RESULT_DATA from "../mocks/searchRes.json";
import { act } from "react-dom/test-utils";
import { SearchResultsList } from "../Search/SearchResultsList";
import Restros from "../Home/Restros";

global.fetch = jest.fn(() => {
  //faking API call
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load food cart component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <FoodCards />
        </Provider>
      </BrowserRouter>
    )
  );

  const searchInput = screen.getByTestId("search-test");

  await act(async () => {
    fireEvent.change(searchInput, { target: { value: "b" } });
  });

  console.log(searchInput.value);

  // Assertion
  expect(searchInput).toBeInTheDocument();
});

it("Should render search result", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <SearchResultsList results={RESULT_DATA} />
      </Provider>
    </BrowserRouter>
  );

  const res = screen.getAllByTestId("search-result");

  // Assertion
  expect(res.length).toBe(5);
});

it("Should filter out the res data", () => {
  render(
    <BrowserRouter>
      <Restros resList={MOCK_DATA} />
    </BrowserRouter>
  );
   
  const filter = screen.getByTestId("filters");

   // Assertion
  expect(filter).toBeInTheDocument();

});
