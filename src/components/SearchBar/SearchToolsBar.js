import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SearchToolBar = () => {
  return (
    <View style={styles.toolbarcontainer}>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icons}
          source={require("../../../assets/Home.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate("Search")}
      >
        <Image
          style={styles.icons}
          source={require("../../../assets/Search.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate("Wallet")}
      >
        <Image
          style={styles.icons}
          source={require("../../../assets/Wallet.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate("Category")}
      >
        <Image
          style={styles.icons}
          source={require("../../../assets/Category.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchToolBar;

const styles = StyleSheet.create({
  toolbarcontainer: {
    width: "100%",
    height: 80,
    backgroundColor: "#20232B",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icons: {
    width: 23,
    height: 23,
    marginHorizontal: 35,
  },
});
