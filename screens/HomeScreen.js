import { View, Text, StyleSheet } from "react-native";
import Balance from "../components/Balance";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Balance currency="лв" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
});
