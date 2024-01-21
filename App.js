import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import IconButton from "./components/UI/IconButton";
import { COLORS } from "./constants/COLORS";

const Bottom = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Bottom.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: COLORS.peach },
            headerTintColor: "white",
            tabBarStyle: { backgroundColor: COLORS.peach },
            tabBarActiveTintColor: "white",
          }}
        >
          <Bottom.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Home",
              // tabBarLabel: "Home Screen",
              tabBarIcon: ({ color, size }) => (
                <IconButton icon="home" color={color} size={size} />
              ),
            }}
          />
        </Bottom.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
