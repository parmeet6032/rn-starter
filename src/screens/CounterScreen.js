import React, { useReducer, useState } from "react";
import { ViewBase, Text, StyleSheet, Button, View } from "react-native";

// APPROACH WITH USESTATE
// const CounterScreen = () => {
//   // will not work
//   // counter gets updated but component doesn't gets reloaded
//   // let counter = 0;
//   const [counter, setCounter] = useState(0); // hook
//   /**
//    * counter: state variable, can be passed as props to children
//    * setCounter: function to update hook, using this function, the component gets reloaded
//    */
//   return (
//     <View>
//       <Button
//         title="Increase"
//         onPress={() => {
//           //   counter++;     // don't do this
//           setCounter(counter + 1);
//           //   console.log(counter);
//         }}
//       />{" "}
//       <Button
//         title="Decrease"
//         onPress={() => {
//           //   counter--; // don't do this
//           setCounter(counter - 1);
//           //   console.log(counter);
//         }}
//       />{" "}
//       <Text> Current Count: {counter} </Text>{" "}
//     </View>
//   );
// };

// APPROACH WITH REDUCER

const reducer = (state, action) => {
  // state: current state object
  // action: Object {type:  , payload:  }
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // will not work
  // counter gets updated but component doesn't gets reloaded
  // let counter = 0;
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // using reducer
  /**
   * state: {count: 0}, when state changes, component reloads
   * dispatch: reducer
   */
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      />
      <Text> Current Count: {state.count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
