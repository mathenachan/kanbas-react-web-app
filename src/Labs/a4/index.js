import React from "react";
import Add from "./Add";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div className="container">
            <h1>Assignment 4</h1>
            <Add a={1} b={2} />
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello} />
            <ClickEvent/>
            <EventObject/>
        </div>
    );
};
export default Assignment4;