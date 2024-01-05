import React from "react";
import ReactDOM from "react-dom/client";

import { el1, Grab, Grab2 } from "./App2";
//* --------------------------------- IMP --------------------------------------
//!All React components must act like pure functions with respect to their props.
//!Props are Read-Only

//This is how to create element in core react
const child = React.createElement("h1", {}, "Hello finally I am in");

//core react Checks
console.log(child); //Object
console.log(typeof child);

//!This is how element is created using JSX. Note: JSX is different and react is different
//JSX is not html in JavaScript(It is HTML like Syntax)
const JSXHeading = <h1 id="heading">Hello I am JSX Syntax</h1>;

//JSX Checks
console.log(JSXHeading); //Object
console.log(typeof JSXHeading);

//!Note: There is no difference between both of them (just jsx make life simple)

//ex. 1 Embedding Expressions in JSX
const name = "Siddhesh";
const greet = <h1>Hello my name is {name}</h1>;

//ex. 2 Embedding Expressions in JSX
const info = {
  firstName: "Siddhesh",
  lastName: "Bhosale",
};
const createGreet = (info) => `${info.firstName} ${info.lastName}`;

const flow = <h1 className="greet">Hello {createGreet(info)}</h1>;

//ex. 3 JSX is an Expression Too

let user = true;

const getGreeting = (user) => {
  return user ? (
    <h1 className="greet2">Hello {createGreet(info)}</h1>
  ) : (
    <h2>Hello Stranger</h2>
  );
};

//ex. 4 If a tag is empty, you may close it immediately with />, like XML:

const el = <img src={user.avatarUrl} />;

//ex. 5 Rendering a Component
//!Note: Always start component name with a capital letter.

const Show = (props) => {
  //Functional Component
  return (
    <div>
      <h2>Rendering Component</h2>
      <h3>Success.....{props.loginID}</h3>
    </div>
  );
};

const element = <Show loginID="1234" />;

//ex. 6 Composing Components

const Welcome = (props) => <h1>Hello, {props.name}</h1>;

const App = () => {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
};

//ex. 7 Extracting Components

const author = {
  avatarUrl:
    "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
  name: "Cute kitty",
  date: new Date(),
};

//!Note: this is not right👇🏻 way, we need to extract component make it more readable

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         {/* avatar */}
//         <img className="Avatar" src={props.avatarUrl} alt={props.name} />

//         {/* info */}
//         <div className="UserInfo-name">{props.name}</div>
//       </div>

//       {/* text */}
//       <div className="Comment-text">{props.text}</div>

//       {/* date */}
//       <div className="Comment-date">{props.date.toString()}</div>
//     </div>
//   );
// }

//!How Extraction work
const Comment = (props) => {
  return (
    <div className="Comment">
      <UserInfo {...props} />

      {/* text */}
      <div className="Comment-text">{props.text}</div>

      {/* date */}
      <div className="Comment-date">{props.date.toString()}</div>
    </div>
  );
};
//First we will extract avatar

const Avatar = (props) => (
  <img className="Avatar" src={props.avatarUrl} alt={props.name} />
);

//second UserInfo with Avatar include in it

const UserInfo = (props) => {
  return (
    <>
      <Avatar {...props} />
      <div className="UserInfo-name">{props.name}</div>
    </>
  );
};

const profile = <Comment {...author} text="Meow Meow" />;

//!        root
const root = ReactDOM.createRoot(document.getElementById("new"));

//!        rendering
//root.render(child);
//root.render(JSXHeading);
//root.render(flow);
//root.render(getGreeting(user));
// root.render(element);
// root.render(profile);
// root.render(<Grab />); //OR root.render(Grab());

const Data = () => {
  return (
    <div>
      <p>Sri Ram</p>
    </div>
  );
};

const ShowTable = () => {
  return (
    <div>
      {/* There are three ways to call component in component */}
     
      {Data()}
      <Data></Data>
      <Data />
      
    </div>
  );
};

root.render(<ShowTable/>);
