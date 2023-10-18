import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import DynamicStyling from "./DynamicStyling";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
  console.log('Working with Arrays');
  console.log('numberArray1 = 12345');
  console.log('stringArray1 = string1string2');
  console.log('variableArray1 = 25-312345string1string2');


  return (
      <div className="container">
        <h1>Assignment 3</h1>
        <TodoList/>
        <TodoItem/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <PathParameters/>
        <JavaScript/>
        <DynamicStyling/>
      </div>
    );
  }
  export default Assignment3;