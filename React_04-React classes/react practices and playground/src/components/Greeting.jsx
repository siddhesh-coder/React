/* eslint-disable react/prop-types */
import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            count: 0,
            count2: 1,
        }
    }

    render() {
        const { namee } = this.props;
        const { count, count2 } = this.state;
        return (
            <div>
                <h2>hi {namee}</h2>
                <h2>Gracias {count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: count + 1,
                    })
                }}>Click</button>
                <h2>Hola {count2}</h2>
            </div>
        );
    }
}

export default Greeting;
