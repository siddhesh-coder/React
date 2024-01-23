/* eslint-disable react/prop-types */
import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <h2>hi {this.props.namee}</h2>
                <h2>Gracias</h2>
                <h2>Hola</h2>
            </div>
        );
    }
}

export default Greeting;
