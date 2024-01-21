import { View, Text, StyleSheet } from "react-native";

export default function Balance({ currency }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Моят баланс</Text>
      <Text style={styles.text}>1205.94 {currency}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
  },
});
