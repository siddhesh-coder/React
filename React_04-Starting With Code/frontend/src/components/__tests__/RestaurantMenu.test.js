import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/Store/appStore";
import { BrowserRouter } from "react-router-dom";
import MenuCard from "../Menu/MenuCard";
import MenuCardList from "../Menu/MenuCardList";
import MOCK_LIST from "../mocks/menuList.json";
import MOCK_MENUTABS from "../mocks/menutabs.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_LIST),
  })
);
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_MENUTABS),
  })
);

const checkIsOpenMock = jest.fn();
const setShowIndexMock = jest.fn();
const setPrevClickIndexMock = jest.fn();

describe("RestaurantMenu component", () => {
 
  it("Should open the accordion", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          {MOCK_MENUTABS.map((tab, index) => (
            <MenuCard
              key={tab?.card?.card?.title}
              downmenu={tab}
              isOpen={checkIsOpenMock(index)}
              setShowIndex={() => {
                setPrevClickIndexMock(global.showIndex);
                setShowIndexMock(index);
              }}
            />
          ))}
          <MenuCardList el={MOCK_LIST} />
        </Provider>
      </BrowserRouter>
    );

    const chevron = screen.getAllByTestId("chevron-test");
    const menu = screen.getAllByTestId("menu-list");

    fireEvent.click(chevron[0]);

    expect(chevron[0]).toBeInTheDocument();
    expect(menu[0]).toBeInTheDocument();
    expect(setPrevClickIndexMock).toHaveBeenCalledWith(global.showIndex);
    expect(setShowIndexMock).toHaveBeenCalledWith(0);
  });
});
