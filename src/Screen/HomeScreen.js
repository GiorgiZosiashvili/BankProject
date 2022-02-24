import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/Home/Header";
import MainCard from "../components/Home/MainCard";
import BankCards from "../components/Home/BankCards";
import Transactions from "../components/Home/Transactions";

const HomeScreen = () => {
  const dollarCurrencie = 2.98;
  const euroCurrencie = 3.38;

  const [selected, setSelected] = useState("₾");
  return (
    <View style={styles.homeScreen}>
      <ScrollView showsVerticalScrollIndicator="null">
        <Header />
        <MainCard
          {...{ setSelected, selected, euroCurrencie, dollarCurrencie }}
        />
        <BankCards />
        <Transactions
          {...{ setSelected, dollarCurrencie, euroCurrencie, selected }}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    height: "100%",
    backgroundColor: "#20232B",
  },
});
