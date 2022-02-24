import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import React from "react";
const Transactions = ({
  setSelected,
  selected,
  euroCurrencie,
  dollarCurrencie,
}) => {
  const lari = 5000;
  const lari2 = 25;
  const lari3 = 2900;

  const text =
    selected === "₾"
      ? `₾ ${lari}`
      : selected === "€"
      ? `€ ${Math.round(lari / euroCurrencie)}`
      : selected === "$"
      ? `$ ${Math.round(lari / dollarCurrencie)}`
      : "va arcerti araa";
  const text2 =
    selected === "₾"
      ? `₾ ${lari2}`
      : selected === "€"
      ? `€ ${Math.round(lari2 / euroCurrencie)}`
      : selected === "$"
      ? `$ ${Math.round(lari2 / dollarCurrencie)}`
      : "va arcerti araa";
  const text3 =
    selected === "₾"
      ? `₾ ${lari3}`
      : selected === "€"
      ? `€ ${Math.round(lari3 / euroCurrencie)}`
      : selected === "$"
      ? `$ ${Math.round(lari3 / dollarCurrencie)}`
      : "va arcerti araa";
  const SwipeRight = () => {
    return (
      <View
        style={{
          width: 70,
          height: 70,

          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Image
          style={styles.share}
          source={require("../../../assets/Share.png")}
        />
      </View>
    );
  };
  return (
    <View style={{ marginTop: 24 }}>
      <Text style={styles.transactionstext}>Transactions</Text>
      <Swipeable renderRightActions={SwipeRight}>
        <View style={styles.swipe}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={styles.emojiHolder}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require("../../../assets/emoji.png")}
                />
              </View>
              <View
                style={{
                  marginLeft: 12,
                }}
              >
                <Text style={styles.name}>Giorgi</Text>
                <Text
                  style={{ fontSize: 12, color: "rgba(255, 255, 255, 0.68)" }}
                >
                  2 Feb, 9:19
                </Text>
              </View>
            </View>
            <Text style={styles.amount}>+ {text} </Text>
          </View>
        </View>
      </Swipeable>
      <Swipeable renderRightActions={SwipeRight}>
        <View style={styles.swipe}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={styles.emojiHolder}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../../../assets/netflix.png")}
                />
              </View>
              <View
                style={{
                  marginLeft: 12,
                }}
              >
                <Text style={styles.name}>Netflix</Text>
                <Text
                  style={{ fontSize: 12, color: "rgba(255, 255, 255, 0.68)" }}
                >
                  2 Feb, 9:19
                </Text>
              </View>
            </View>
            <Text style={styles.amountNegative}>- {text2} </Text>
          </View>
        </View>
      </Swipeable>
      <Swipeable renderRightActions={SwipeRight}>
        <View style={styles.swipe}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={styles.emojiHolder}>
                <Image
                  style={styles.emoji}
                  source={require("../../../assets/apple.png")}
                />
              </View>
              <View
                style={{
                  marginLeft: 12,
                }}
              >
                <Text style={styles.name}>Apple</Text>
                <Text
                  style={{ fontSize: 12, color: "rgba(255, 255, 255, 0.68)" }}
                >
                  4 Mar, 20:00
                </Text>
              </View>
            </View>
            <Text style={styles.amountNegative}>- {text3} </Text>
          </View>
        </View>
      </Swipeable>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  transactionstext: {
    color: "#FFFFFF",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 24,
    marginBottom: 24,
    left: 20,
  },

  share: {
    flex: 1,
  },
  swipe: {
    height: 70,
    width: 350,
    backgroundColor: "#191C24",
    borderRadius: 16,
    left: 20,
    justifyContent: "center",
    padding: 8,
    flexDirection: "row",
    marginBottom: 16,
  },
  emojiHolder: {
    width: 54,
    height: 54,
    backgroundColor: "#23262F",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#FFFFFF",
    marginBottom: 7,
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#DEF86F",
    textTransform: "capitalize",
  },
  amountNegative: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#F36C65",
    textTransform: "capitalize",
  },
  emoji: {
    height: 25,
    width: 25,
    backgroundColor: "white",
    borderRadius: 16,
  },
});
