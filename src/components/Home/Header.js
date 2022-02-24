import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const name = "Giorgi";
const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 70,
        marginHorizontal: 20,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.Text}>Welcome Back</Text>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <Image source={require("../../../assets/Notification.png")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Text: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
  },
  nameText: {
    color: "#DEF86F",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    marginLeft: 7,
  },
});
