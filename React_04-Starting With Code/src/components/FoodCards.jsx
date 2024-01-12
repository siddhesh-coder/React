import resList from "../utils/mockData";
import SearchBar, { SearchSlices } from "./SearchBar";
import CardContainer from "./CardContainer";
import TopRatedRes from "./TopRatedRes";
import { useEffect, useState } from "react";
import { SearchResultsList } from "./SearchResultsList";
import { SWIGGY_API } from "../utils/constants";


export default FoodCards = () => {
    //!Note: never take index's as a key react says it.

    const [results, setResults] = useState([]);
    const [cards, setCards] = useState(resList);

    useEffect(()=>{
       fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();

        setCards(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log(cards);
    }

    return (
      <main>
        <SearchBar setResults={setResults}/>
        <SearchResultsList results={results}/>
        {/* <TopRatedRes resList={resList}> */}
        <div id="card-container">
          {cards.map((restro) => (
            <CardContainer foodData={restro} />
          ))}
        </div>
        {/* </TopRatedRes> */}
      </main>
    );
  };