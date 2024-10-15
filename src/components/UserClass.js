import React from "react";
//class based component
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //best place to create state vaiables
    this.state = {
      count:0,
     userInfo:{
    name:""
     }
    };
    console.log("child Constructor");
  }
   async componentDidMount()
  {
    const data = await fetch("https://api.github.com/users/pinki2citm");
    const json = await data.json();
    this.setState({
      userInfo: json,
    })
    console.log(json);
  }
  render() {
    const { name, location, avatar_url,bio, company } = this.state.userInfo;

    console.log("child render");
    return (
      <div className="user-card">
        <h1>count:{this.state.count}</h1>
        <button onClick={()=>{
            this.setState({
                count: this.state.count+1,
            })
        }}>
            increase </button>

        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Bio: {bio}</h3>
        <h3>Company: {company}</h3>
        <img src={avatar_url} className="logo"/>
      </div>
    );
  }
}
export default UserClass;
