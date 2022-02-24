import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";

const ToolBar = ({ navigation }) => {
  const [color, setColor] = useState("Home");
  return (
    <View style={styles.toolbarcontainer}>
      <TouchableOpacity
        style={[styles.icons]}
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
          setColor("Home");
        }}
      >
        <Entypo
          name="home"
          size={24}
          color={color === "Home" ? "#DEF86F" : "white"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icons}
        title="Search"
        onPress={() => {
          navigation.navigate("Search");
          setColor("Search");
        }}
      >
        <AntDesign
          name="search1"
          size={24}
          color={color === "Search" ? "#DEF86F" : "white"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icons}
        title="Wallet"
        onPress={() => {
          navigation.navigate("Wallet");
          setColor("Wallet");
        }}
      >
        <Entypo
          name="wallet"
          size={24}
          color={color === "Wallet" ? "#DEF86F" : "white"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icons}
        title="Category"
        onPress={() => {
          navigation.navigate("Category");
          setColor("Category");
        }}
      >
        <MaterialIcons
          name="category"
          size={24}
          color={color === "Category" ? "#DEF86F" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ToolBar;

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
    marginHorizontal: 35,
  },
});
