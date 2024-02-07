import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../constants/COLORS";

export default function Welcome({ name }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Добре дошъл,</Text>
        <Text style={styles.text}>{name}!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#4e2cfae0",
    borderRadius: 20,
    backgroundColor: "#4e2cfae0",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: COLORS.lightGray,
  },
});
