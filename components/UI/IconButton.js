import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  pressed: {
    opacity: 0.75,
  },
});
