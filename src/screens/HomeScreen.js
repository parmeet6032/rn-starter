import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}> Hi there!</Text>
      <Button
        title="Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button title="List Demo" onPress={() => navigation.navigate("List")} />
      <Button title="Image Demo" onPress={() => navigation.navigate("Image")} />
      <Button
        title="Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Colors Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Squares Demo"
        onPress={() => navigation.navigate("Square")}
      />

      {/* comes with predefined styling */}
      {/* <Button title="Demo" onPress={() => console.log("button 1 pressed")} /> */}

      {/* more customizable button */}
      {/* <TouchableOpacity onPress={() => console.log("button 2 pressed")}>
        <Text>Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
