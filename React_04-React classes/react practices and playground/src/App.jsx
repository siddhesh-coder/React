import React from "react";
import Greeting from "./components/Greeting";

class App extends React.Component {
  constructor(prop) {
    super(prop);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent DidMount");
  }

  componentDidUpdate() {
    console.log("Parent DidUpdate");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <Greeting namee={"First"} />
        <h1>Hello From Class</h1>
        <Greeting namee={"Second"} />
      </div>
    );
  }
}

export default App;

/* IMP react lifecycle

“Render phase”

- Parent Constructor
- Parent Render
  
  - First Child Constructor
  - First Child Render

  - Second Child Constructor
  - Second Child Render

“Commit phase” [DOM Manipulation] in single batch

  - First Child DidMount
  - Second Child DidMount

- Parent DidMount

*/
