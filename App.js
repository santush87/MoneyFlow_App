import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS } from "./constants/COLORS";

import HomeScreen from "./screens/HomeScreen";
import IconButton from "./components/UI/IconButton";
import AddExpenseScreen from "./screens/AddExpenseScreen";

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        {/* <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: #22eb9b },
            headerTintColor: "white",
          }}
        > */}
        {/* THE HOME SCREEN */}
        {/* <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          /> */}
        {/* ADD EXPENSES SCREEN */}
        {/* <Stack.Screen
            name="AddScreen"
            component={AddExpenseScreen}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator> */}
        <Bottom.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#80db0a" },
            headerTintColor: "white",
            tabBarStyle: { backgroundColor: "#80db0a" },
            tabBarActiveTintColor: "white",
          }}
        >
          <Bottom.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Начало",
              // tabBarLabel: "Home Screen",
              tabBarIcon: ({ color, size }) => (
                <IconButton icon="home" color={color} size={size} />
              ),
            }}
          />
          <Bottom.Screen
            name="AddExpenseScreen"
            component={AddExpenseScreen}
            options={{
              title: "Добави",
              tabBarIcon: ({ color, size }) => (
                <IconButton icon="add" color={color} size={size} />
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
