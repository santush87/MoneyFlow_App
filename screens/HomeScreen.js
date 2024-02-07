import { View, StyleSheet } from "react-native";
import Balance from "../components/Balance";
import ExpensesChart from "../components/Expenses/ExpensesChart";
import Welcome from "../components/Welcome";
import { COLORS } from "../constants/COLORS";
import MyExpenses from "../components/Expenses/MyExpenses";

export default function HomeScreen() {
  const price = 2248.34;
  return (
    <View style={styles.container}>
      <Welcome name={"Иван"} />
      <Balance amount={price} currency="лв" income={654.64} outcome={194.18} />
      <MyExpenses />

      {/* <ExpensesChart /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#dadcdb",
  },
});
