import React from "react";
import ReduxExamples from "./ReduxExamples";
import Add from "./Add";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariable";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div className="container">
            <h1>Assignment 4</h1>
            <ReduxExamples/>
            <Add a={1} b={2} />
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello} />
            <ClickEvent/>
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
        </div>
    );
};
export default Assignment4;