import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action === {colorToChange: 'red' || 'green' || 'blue', amount: +15 || -15}
  /**
   * CONVENTION
   * action = {type: "", payload: some_data}
   */

  switch (action.type) {
    case "change_red":
      // never going to do
      // state.red = state.red + 15
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const COLOR_INCREMENT = 15;

  // As states have similar functionality and change is also similar,
  // we can use reducer
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  // reducer --> function that runs when dispatch is called
  // {} --> initial state

  //   // 3 DIFFERENT STATES
  //   const [red, setRed] = useState(0);
  //   const [green, setGreen] = useState(0);
  //   const [blue, setBlue] = useState(0);

  //   // HELPER FUNCTION, in case of 2 states
  //   const setColor = (color, change) => {
  //     // color === 'red', 'green', 'blue'
  //     // change === +15, -15

  //     switch (color) {
  //       case "red":
  //         red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //         return;
  //       case "green":
  //         green + change > 255 || green + change < 0
  //           ? null
  //           : setGreen(green + change);
  //         return;
  //       case "blue":
  //         blue + change > 255 || blue + change < 0
  //           ? null
  //           : setBlue(blue + change);
  //         return;

  //       default:
  //         return;
  //     }
  //   };

  return (
    <View>
      <ColorCounter
        // IF 3 STATES AND HELPER FUNCTION IS USED
        // color="Red"
        // onIncrease={() => setColor("red", COLOR_INCREMENT)}
        // onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}

        color="Red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
