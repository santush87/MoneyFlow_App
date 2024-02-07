import { View, Text, StyleSheet } from "react-native";

export default function Balance({ amount, currency }) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Месечен баланс</Text>
        <Text style={styles.amount}>
          {amount} {currency}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: 30,
    padding: 14,
    borderRadius: 20,
    // borderWidth: 1,
    backgroundColor: "#c9c9f5",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    paddingBottom: 5,
  },
  amount: {
    fontSize: 24,
  },
});
