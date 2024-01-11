import resList from "../utils/mockData";
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import TopRatedRes from "./TopRatedRes";

export default FoodCards = () => {
    //!Note: never take index's as a key react says it.
    return (
      <main>
        <SearchBar />

        <TopRatedRes>
        <div id="card-container">
          {resList.map((restro) => (
            <CardContainer key={restro.info.id} foodData={restro} />
          ))}
        </div>
        </TopRatedRes>
        
      </main>
    );
  };