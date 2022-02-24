import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";

const MainCard = ({
  setSelected,
  selected,
  dollarCurrencie,
  euroCurrencie,
}) => {
  const money = 15000;

  const Lari = selected === "₾" ? money : null;
  const dollar = selected === "$" ? Math.round(money / dollarCurrencie) : null;
  const euro = selected === "€" ? Math.round(money / euroCurrencie) : null;
  return (
    <View style={{ marginHorizontal: 20, marginTop: 38 }}>
      <ImageBackground
        style={styles.card}
        source={require("../../../assets/Balance-Card.png")}
      >
        <View
          style={{
            flex: 1,
            borderRadius: "16",

            flexDirection: "column",
            justifyContent: "space-around",
            margin: 17,
          }}
        >
          <Text style={styles.balancetext}>Total Balance</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {selected === "₾" && <Text style={styles.money}>₾ {Lari}</Text>}
            {selected === "$" && <Text style={styles.money}>$ {dollar}</Text>}
            {selected === "€" && <Text style={styles.money}>€ {euro}</Text>}

            <CurrencyConverter {...{ selected, setSelected }} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 120,
    borderRadius: 16,
  },
  balancetext: {
    textTransform: "capitalize",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 14,
    color: "rgba(32, 35, 44, 0.68)",
  },

  money: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 31,
    textTransform: "capitalize",
  },
});
