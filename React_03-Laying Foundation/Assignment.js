import React from "react";

//Using core React
export const nested = [
  React.createElement("h1", {}, "h1 Assign"),
  React.createElement("h2", {}, "h2 Assign"),
  React.createElement("h3", {}, "h3 Assign"),
];

//Using JSX

//element
export const nested2 = (
  <>
    <h1 style={{ color: "red" }}>h1 Assign from JSX</h1>
    <h2 style={{ color: "blue" }}>h2 Assign</h2>
    <h3 style={{ color: "black" }}>h3 Assign</h3>
  </>
);

//functional component
export const Nested3 = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>h1 Assign from functional component</h1>
      <h2 style={{ color: "blue" }}>h2 Assign</h2>
      <h3 style={{ color: "black" }}>h3 Assign</h3>
    </>
  );
};

//Composition of Component(Add a component inside another)

export const MyButton = () => (
  <button className="button">Click me</button>
)

export const Box = () => {
  return (
    <div className="container">
        <MyButton/>
    </div>
  );
};
