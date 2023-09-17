import { Component } from "react";

import classes from "./User.module.css";

//class-base component
class User extends Component {
  //specific method for React
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

//function base
// const User = (props) => {
//   return <li className={classes.user}>{this.props.name}</li>;
// };

export default User;
