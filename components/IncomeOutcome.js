import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IncomeOutcome({ income, outcome, currency }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && styles.pressed,
        ]}
      >
        <View style={styles.inAndOut}>
          <Ionicons name="arrow-down" size={24} color="green" />
          <Text>Приход</Text>
        </View>
        <Text style={styles.textIncome}>
          {income} {currency}
        </Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && styles.pressed,
        ]}
      >
        <View style={styles.inAndOut}>
          <Ionicons name="arrow-up" size={24} color="red" />
          <Text>Разход</Text>
        </View>
        <Text style={styles.textOutcome}>
          {outcome} {currency}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  innerContainer: {
    // flex: 1,
    alignItems: "center",
  },
  inAndOut: {
    flexDirection: "row",
  },
  textIncome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#026302",
  },
  textOutcome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  pressed: {
    opacity: 0.7,
  },
});
