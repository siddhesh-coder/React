import React from "react";
import ReactDOM from "react-dom/client";

const child = React.createElement('h1', {}, "Hello Siddhesh Welcome to react");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(child);