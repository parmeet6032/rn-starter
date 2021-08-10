import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "James Mcmahon",
      age: 38,
    },
    {
      name: "Armando Gillespie",
      age: 31,
    },
    {
      name: "Porter Jacobson",
      age: 33,
    },
    {
      name: "Caleb Holland",
      age: 40,
    },
    {
      name: "Hunter Reeves",
      age: 45,
    },
    {
      name: "Upton Good",
      age: 29,
    },
    {
      name: "Henry Whitley",
      age: 44,
    },
    {
      name: "Bruce Parker",
      age: 24,
    },
    {
      name: "Keefe Wilson",
      age: 34,
    },
    {
      name: "Alan Welch",
      age: 37,
    },
    {
      name: "Jamal Jacobson",
      age: 24,
    },
    {
      name: "Lyle Frost",
      age: 22,
    },
    {
      name: "Zeus Love",
      age: 36,
    },
  ];

  return (
    <View>
      <FlatList
        data={friends}
        renderItem={
          // (element) => {
          //     element === { item: { name: "abc", age: "23" }, index: 0 };
          // }
          ({ item }) => {
            // destructuring
            return (
              <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
              </Text>
            );
          }
        }
        // method 1: provide keys in data
        keyExtractor={(friend) => friend.name} // must be unique, method 2, better
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
