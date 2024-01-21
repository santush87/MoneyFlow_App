import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/COLORS";

export default function AddExpenseScreen() {
  return (
    <View style={styles.container}>
      <Text>AddExpenseScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.blue,
  },
});
