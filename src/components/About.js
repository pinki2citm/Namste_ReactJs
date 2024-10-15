import User from "./USer";
import UserClass from "./UserClass";
import {Component} from "react";
//Functional Componenets
// const About = () => {
//   return (
//     <div>
//       <h1>About us Page</h1>
//       <User name={"Pinki Kumari (functional)"} location={"Bihar"} contact ={"pinkikumari2312@gamil.com"} />
//       <UserClass name="Pinki Kumari (class)" location={"Noida"} contact ={"pinkikumaristm9@gamil.com"} />
//     </div>
//   );
// };

//class based About componets

class About extends Component{
  constructor()
  {
    super();
    console.log("parent constructor");
  }
  componentDidMount()
  {
    console.log("parent component did Mount");
  }
  render()
  {
    console.log("parent render");
    return(
      <div className="p-4 m-4">
      <h1>About us Page</h1>
      <User name={"Pinki Kumari (functional)"} location={"Bihar"} contact ={"pinkikumari2312@gamil.com"} />
      <UserClass name="Pinki Kumari (class)" location={"Noida"} contact ={"pinkikumaristm9@gamil.com"} />
    </div>
    );
  }
}
export default About;

