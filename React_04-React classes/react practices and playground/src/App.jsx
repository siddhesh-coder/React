import React from "react";
import Greeting from "./components/Greeting";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello From Class</h1>
        
        <Greeting namee={"Siddhesh"} />
      </div>
    );
  }
}

export default App;
