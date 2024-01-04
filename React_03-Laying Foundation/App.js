import React from "react";
import ReactDOM from "react-dom/client";

//This is how to create element in core react
const child = React.createElement('h1',{}, "Hello finally I am in");

//core react Checks
console.log(child); //Object
console.log(typeof child);

//!This is how element is created using JSX. Note: JSX is different and react is different
//JSX is not html in JavaScript(It is HTML like Syntax) 
const JSXHeading = <h1 id="heading">Hello I am JSX Syntax</h1>;

//JSX Checks
console.log(JSXHeading);  //Object
console.log(typeof JSXHeading);

//!Note: There is no difference between both of them (just jsx make life simple)


const root = ReactDOM.createRoot(document.getElementById('new'));

//root.render(child);
root.render(JSXHeading);