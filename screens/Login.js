import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import TheLogo from "../components/TheLogo";
import { COLORS } from "../constants/COLORS";

export default function Login() {
  return (
    <View style={styles.box}>
      <TheLogo />
      <View style={styles.textContainer}>
        <Text style={styles.logoText}>Login</Text>
      </View>
      <View>
        <Text>Email</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput style={styles.input} />
      </View>
      <Button title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginTop: 40,
    padding: 40,
  },
  logoText: {
    fontSize: 24,
  },
  textContainer: {
    paddingTop: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 4,
    borderBottomWidth: 1,
    backgroundColor: COLORS.blue,
  },
});
