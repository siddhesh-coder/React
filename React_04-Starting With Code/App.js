import React from "react";
import ReactDOM  from "react-dom/client";

const Child = () =>{
    return <h1 className="heading">Hello lets Code</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Child/>);