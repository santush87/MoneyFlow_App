import { View, Text, StyleSheet } from "react-native";
import Balance from "../components/Balance";
import ExpensesChart from "../components/ExpensesChart";
import Welcome from "../components/Welcome";
import { COLORS } from "../constants/COLORS";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Welcome name={"Иван"} />
      <Balance amount={251.36} currency="лв" />
      <ExpensesChart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ddf6f2",
  },
});
