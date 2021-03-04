import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";
import LikeButton from "./LikeButton";
import SimpleMenu from "./Menu";
import Header from "./Header";
 
ReactDOM.render(<>
    <Header />
    <LikeButton />
    <HelloWorld />
    <SimpleMenu />
    </>, document.getElementById("react-root"));