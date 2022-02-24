import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";

const BankCards = () => {
  const scrollRef = useRef(null);
  const [xOffset, setXOffset] = useState(0);

  return (
    <View style={styles.bankCardsHolder}>
      <ScrollView
        onScrollEndDrag={(e) => {
          setXOffset(e.nativeEvent.targetContentOffset.x);
        }}
        pagingEnabled
        ref={scrollRef}
        decelerationRate={0}
        scrollEventThrottle={1}
        horizontal
        disableIntervalMomentum
        showsHorizontalScrollIndicator="null"
        snapToInterval={200}
        contentContainerStyle={{ paddingRight: 30 }}
      >
        <View style={{ flexDirection: "row", marginTop: 18, paddingLeft: 10 }}>
          <ImageBackground
            style={styles.card}
            source={require("../../../assets/Card.png")}
          >
            <View
              style={{
                justifyContent: "space-between",
                borderRadius: 16,
                width: "100%",
                height: "100%",
                padding: 15,
              }}
            >
              <View style={styles.insidecards}>
                <Image source={require("../../../assets/Visa.png")} />
                <Image source={require("../../../assets/wifi.png")} />
              </View>
              <View style={styles.insidecards}>
                <Text style={styles.insideCardText}>****9550</Text>
                <Text style={styles.insideCardText}>$799</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.card}
            source={require("../../../assets/BankCard2.png")}
          >
            <View
              style={{
                justifyContent: "space-between",
                borderRadius: 16,
                width: "100%",
                height: "100%",
                padding: 15,
              }}
            >
              <View style={styles.insidecards}>
                <Image source={require("../../../assets/Visa.png")} />
                <Image source={require("../../../assets/wifi.png")} />
              </View>
              <View style={styles.insidecards}>
                <Text style={styles.insideCardText}>****7050</Text>
                <Text style={styles.insideCardText}>$2119</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.card}
            source={require("../../../assets/Card.png")}
          >
            <View
              style={{
                justifyContent: "space-between",
                borderRadius: 16,
                width: "100%",
                height: "100%",
                padding: 15,
              }}
            >
              <View style={styles.insidecards}>
                <Image source={require("../../../assets/Visa.png")} />
                <Image source={require("../../../assets/wifi.png")} />
              </View>
              <View style={styles.insidecards}>
                <Text style={styles.insideCardText}>****9550</Text>
                <Text style={styles.insideCardText}>$799</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.card}
            source={require("../../../assets/BankCard2.png")}
          >
            <View
              style={{
                justifyContent: "space-between",
                borderRadius: 16,
                width: "100%",
                height: "100%",
                padding: 15,
              }}
            >
              <View style={styles.insidecards}>
                <Image source={require("../../../assets/Visa.png")} />
                <Image source={require("../../../assets/wifi.png")} />
              </View>
              <View style={styles.insidecards}>
                <Text style={styles.insideCardText}>****7050</Text>
                <Text style={styles.insideCardText}>$1239</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            styles.dots,
            {
              backgroundColor:
                xOffset === 0 || xOffset === -200 ? "#DEF86F" : "#B5B6B9",
            },
          ]}
        ></View>
        <View
          style={[
            styles.dots,
            { backgroundColor: xOffset === 200 ? "#DEF86F" : "#B5B6B9" },
          ]}
        ></View>
        <View
          style={[
            styles.dots,
            { backgroundColor: xOffset === 400 ? "#DEF86F" : "#B5B6B9" },
          ]}
        ></View>
        <View
          style={[
            styles.dots,
            {
              backgroundColor:
                xOffset === 600 || xOffset === 800 ? "#DEF86F" : "#B5B6B9",
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

export default BankCards;

const styles = StyleSheet.create({
  bankCardsHolder: {
    marginTop: 25,
    width: 421,
    height: 184,
    backgroundColor: "#191C24",
    alignItems: "center",
    paddingBottom: 16,
  },
  card: {
    width: 212,
    height: 128,
    marginHorizontal: 10,
  },
  insidecards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  insideCardText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
  },
  dots: {
    width: 6,
    height: 6,
    // backgroundColor: "#DEF86F",
    backgroundColor: "#B5B6B9",
    marginHorizontal: 3,
    borderRadius: 100,
  },
});
