import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import TopRatedRes from "./TopRatedRes";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { SearchResultsList } from "./SearchResultsList";
import { SWIGGY_API } from "../utils/constants";

// async function postData(url = "", data = {}) {
//   const response = await fetch(url, {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify(data),
//   });
//   return response.json();
// }

export default FoodCards = () => {
  //!Note: never take index's as a key react says it.

  const [results, setResults] = useState([]);
  const [cards, setCards] = useState([]);

  // const [data, setData] = useState([]);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  // const fetchDataUpdate = async () => {
  //   try {
  //     if(loading) return;
  //     setLoading(true);
  //     const response = await postData(`https://api.allorigins.win/raw?url=${encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/update')}`, {
  //   page: page,
  // });
  //     console.log(response);
  //     setData((prevData) => [...prevData, ...response]);
  //     setPage((prevPage) => prevPage + 1);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchDataUpdate();
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      setCards(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     fetchDataUpdate();
  //   }
  // };

  // const debounce = (func, delay) => {
  //   let timeout;
  //   return function () {
  //     const context = this;
  //     const args = arguments;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => {
  //       func.apply(context, args);
  //     }, delay);
  //   };
  // };

  // const debouncedHandleScroll = debounce(handleScroll, 200);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [debouncedHandleScroll]);

  return (
    <main>
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results} />
      <TopRatedRes resList={cards}>
        <div id="card-container">
          {/* conditional rendering */}
          {cards.length === 0 ? (
            <Shimmer />
          ) : (
            cards.map((restro) => (
              <CardContainer key={restro.info.id} foodData={restro} />
            ))
          )}
          {/* {loading && <p>Loading...</p>} */}
        </div>
      </TopRatedRes>
    </main>
  );
};
