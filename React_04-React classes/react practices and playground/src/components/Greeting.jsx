/* eslint-disable react/prop-types */
import React from "react";

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'User Name',
      address: "User Address",
      avatar: "User avatar"
    };
    console.log(this.props.namee+"Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.namee+"Child DidMount"); 
    
    //API calls
    const data = await fetch('https://api.github.com/users/siddhesh-coder');
    const json = await data.json();
    this.setState({
      name: json.name,
      location: json.location,
      avatar: json.avatar_url,
    })
  }

  componentDidUpdate(){
    console.log(this.props.namee+"Child DidUpdate");
  }

  render() { 
    const { namee } = this.props;
    const { name, location, avatar } = this.state;
    console.log(namee+"Child Render");
    return (
      <div>
        <img src={avatar} style={{width: 90}} alt="profile" />
        <h2>name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default Greeting;
