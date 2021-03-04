import React,{Component } from "react";
import { withRouter } from "react-router";
import "./App.css";
import Main from "./Components/Main";

class App extends Component {
  async componentDidMount() {
    const tenants = {
      active_tenant: "DBTEST",
      status: "error",
      tenants: ["ExafluenceRepo", "ExafluenceRepoTest", "DBTEST", "TEST_TRAIL"],
    };
    await localStorage.setItem("tenants", JSON.stringify(tenants));
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default withRouter(App);
