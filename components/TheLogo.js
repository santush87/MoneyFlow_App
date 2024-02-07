import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TheLogo() {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name="add" size={24} />
      <Text style={styles.text}>Money Flow</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 6,
  },
  text: {
    fontSize: 24,
  },
});
