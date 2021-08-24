import React, { useState } from "react";
import { ViewBase, Text, StyleSheet, Button, View } from "react-native";

const CounterScreen = () => {
  // will not work
  // counter gets updated but component doesn't gets reloaded
  // let counter = 0;
  const [counter, setCounter] = useState(0); // hook
  /**
   * counter: state variable, can be passed as props to children
   * setCounter: function to update hook, using this function, the component gets reloaded
   */
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //   counter++;     // don't do this
          setCounter(counter + 1);
          //   console.log(counter);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          //   counter--; // don't do this
          setCounter(counter - 1);
          //   console.log(counter);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
