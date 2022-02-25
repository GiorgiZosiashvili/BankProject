import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./src/navigation/MyStack";

export default function App() {
  return (
    <View style={styles.container}>
      <MyStack />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20232B",
  },
});
