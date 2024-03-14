import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/Store/appStore";
import { Provider } from "react-redux";
import MOCK_DATA from "../mocks/restroFeed.json";
import RESULT_DATA from "../mocks/searchRes.json";
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

it("should filter out the res data", () => {
  render(
    <BrowserRouter>
      <Restros resList={MOCK_DATA} />
    </BrowserRouter>
  );

  const filter_1 = screen.getByTestId("filter_1");
  fireEvent.click(filter_1);
  const filter_2 = screen.getByTestId("filter_2");
  fireEvent.click(filter_2);

  const cards = screen.queryAllByTestId("restro-test");

  // Assert that the cards are present
  expect(cards.length).toBe(2);
});
