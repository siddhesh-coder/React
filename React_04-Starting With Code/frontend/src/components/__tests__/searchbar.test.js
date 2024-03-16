import SearchBar from "../Search/SearchBar";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, Link } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { SearchResultsList } from "../Search/SearchResultsList";
import MOCK_RES from "../mocks/searchData.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ MOCK_RES }),
  })
);

it("Renders search input and search icon", () => {
  render(<SearchBar />);
  expect(screen.getByTestId("search-test")).toBeInTheDocument();
  expect(screen.getByTestId("search-icon")).toBeInTheDocument();
});

it("Should take the input from user", async () => {
  render(<SearchBar />);

  const input = screen.getByTestId("search-test");

  await act(async () => {
    fireEvent.change(input, { target: { value: "pizza" } });
  });

  expect(input.value).toBe("pizza");
});

it("Displays search results when search value is provided", async () => {
  render(
    <BrowserRouter>
      <SearchBar />
      <SearchResultsList results={MOCK_RES} />
    </BrowserRouter>
  );
  const searchInput = screen.getByTestId("search-test");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  expect(await screen.findByText("Pizza Hut")).toBeInTheDocument();
});
