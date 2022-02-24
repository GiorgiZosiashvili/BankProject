import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const CurrencyConverter = ({ selected, setSelected }) => {
  return (
    <View style={styles.valuteconverter}>
      <TouchableOpacity
        style={[
          styles.currency,
          {
            backgroundColor:
              selected === "₾" ? "#DEF86F" : "rgba(25, 28, 36, 0.16)",
          },
        ]}
        onPress={() => {
          setSelected("₾");
        }}
      >
        <Text style={styles.initials}>₾</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.currency,
          {
            backgroundColor:
              selected === "€" ? "#DEF86F" : "rgba(25, 28, 36, 0.16)",
          },
          { marginHorizontal: 4 },
        ]}
        onPress={() => {
          setSelected("€");
        }}
      >
        <Text style={styles.initials}>€</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.currency,
          {
            backgroundColor:
              selected === "$" ? "#DEF86F" : "rgba(25, 28, 36, 0.16)",
          },
        ]}
        onPress={() => {
          setSelected("$");
        }}
      >
        <Text style={styles.initials}>$</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CurrencyConverter;

const styles = StyleSheet.create({
  currency: {
    height: 24,
    width: 48,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  valuteconverter: {
    padding: 4,
    backgroundColor: "rgba(25, 28, 36, 0.16)",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  initials: {
    color: "#1F222B",
    fontSize: 18,
    fontWeight: "700",
  },
});
