import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/COLORS";
import PieChart from "../PieChart";

export default function MyExpenses() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textExpense}>РАЗХОДИ</Text>
        <Text style={styles.textDate}>Март 2024</Text>
      </View>
      <View>
        <PieChart />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#4e2cfae0",
    borderRadius: 20,
    backgroundColor: "#4e2cfae0",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textExpense: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: COLORS.lightGray,
  },
  textDate: {
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
    color: COLORS.lightGray,
  },
});
