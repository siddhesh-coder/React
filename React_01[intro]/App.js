//ReactElement(Object) =>(render)=> HTML(Browser understands)

//In js it take only one parameter but in react it will take three parameter.
//{} or also called as props in which you well give attributes to your tags.
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello React"
);

console.log(heading); //note: it will not give html tag like jsDom, but it will give the object.

// const root = ReactDOM.createRoot(document.getElementById("main"));

// root.render(heading); //it will convert the object into the html tags and it will be shown.

//Nested like Structure
/* 

<div id="parent">
   <div id="child">
     <h1>Hello React Bhai</h1>
   </div>
</div>

*/
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Hello React Bhai")
//   )
// );

// console.log(parent);
// root.render(parent);

//If you want like this structure use array
/* 
<div id="parent">
   <div id="child">
     <h1>Hello React Bhai</h1>
     <h1>Hello React Bhai</h1>
     <h1>Hello React Bhai</h1>
   </div>
</div>
*/
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hello React Bhai"),
//     React.createElement("h2", {}, "Hello React Bro"),
//     React.createElement("h3", {}, "Hello React Buddy"),
//   ])
// );

// console.log(parent);
// root.render(parent);

//Creating more complicated
/* 
<div id="parent">
   <div id="child">
     <h1>Hello React Bhai</h1>
     <h1>Hello React Bhai</h1>
     <h1>Hello React Bhai</h1>
   </div>
   <div id="child2">
     <h1>Hello React Bhai</h1>
     <h1>Hello React Bhai</h1>
     <h1>Hello React Bhai</h1>
   </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello React Bhai"),
    React.createElement("h2", {}, "Hello React Bro"),
    React.createElement("h3", {}, "Hello React Buddy"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello React Bhai"),
    React.createElement("h2", { class: "bro" }, "Hello React Bro"),
    React.createElement("h3", { id: "buddy" }, "Hello React Buddy"),
  ]),
]);

//Note: So to resolve this complex stuff will implement JSX in upcoming toutorial.
const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(parent); 
console.log(parent);
