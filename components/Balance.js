import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IncomeOutcome from "./IncomeOutcome";

export default function Balance({ amount, currency, income, outcome }) {
  const theAmount = (
    <Text style={styles.amountPositive}>
      {amount} {currency}
    </Text>
  );

  if (amount <= 0) {
    theAmount = (
      <Text style={styles.amountNegative}>
        {amount} {currency}
      </Text>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.balance}>
        <Text style={styles.text}>Месечен баланс</Text>
        <Text style={styles.amountPositive}>
          {amount} {currency}
        </Text>
      </View>
      <IncomeOutcome income={income} outcome={outcome} currency={currency} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#c9c9f5",
  },
  balance: {
    paddingBottom: 20,
    backgroundColor: "#c9c9f5",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    paddingBottom: 5,
  },
  amountPositive: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#50ab05",
  },
  amountNegative: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
});
