import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
const Search = ({ navigation }) => {
  return (
    <View style={styles.searchscreen}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={"white"}
        style={styles.searchbar}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchscreen: {
    paddingTop: 90,
    flex: 1,
    backgroundColor: "#20232B",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchbar: {
    color: "white",
    borderWidth: 1,
    borderColor: "gray",
    height: 40,
    width: 200,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
});
