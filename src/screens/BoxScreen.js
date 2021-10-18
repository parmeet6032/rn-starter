import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
      </View>

      {/* EXERCISE */}
      <View style={styles.parentStyle}>
        <View style={styles.viewOneStyle} />
        <View style={styles.viewTwoStyle} />
        <View style={styles.viewThreeStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,

    // PARENT PROPERTIES

    // alignItems: "stretch", // default
    // alignItems: "flex-start",
    // alignItems: "flex-end",
    // alignItems: "center",
    // alignItems: "baseline",

    // flexDirection: "column", // default
    // flexDirection: "column-reverse",
    // flexDirection: "row",
    // flexDirection: "row-reverse",

    // justifyContent: "flex-start", // default
    // justifyContent: "center",
    // justifyContent: "flex-end",
    // justifyContent: "space-around",
    // justifyContent: "space-between",
    // justifyContent: "space-evenly",
  },

  // CHILDREN PROPERTIES
  // flex
  // alignSelf

  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 4,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 4,

    // alignSelf: "auto",
    // alignSelf: "baseline",
    // alignSelf: "center",
    // alignSelf: "flex-end",
    // alignSelf: "flex-start",
    // alignSelf: "stretch",    // default

    // **** POSITION PROPERTIES ****
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // ...StyleSheet.absoluteFillObject,    // adds above 5 properties automatically

    // position properties works:-
    // first all elements gets placed according to flex properties
    // then from that properties top, left, bottom, right takes place
    // precedence: top >> bottom AND left >> right
    // top: 10,
    // bottom: 10,
    // left: 10,
    // right: 10,

    // borderWidth: 7,
    // borderColor: "blue",

    // fontSize: 18,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 2,
  },

  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    // top: 50,
    // marginTop: 50,
    alignSelf: "flex-end",
  },
  // OR CREATE viewTwoParent
  viewTwoParent: {
    height: 100,
    justifyContent: "flex-end",
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
