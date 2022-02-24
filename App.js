import { StatusBar } from "expo-status-bar";
import MyStack from "./src/navigation/MyStack";
import { StyleSheet, Text, View } from "react-native";

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
