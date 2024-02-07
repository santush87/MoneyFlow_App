import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS } from "./constants/COLORS";

import HomeScreen from "./screens/HomeScreen";
// import IconButton from "./components/ui/IconButton";
// import AddExpenseScreen from "./screens/AddExpenseScreen";
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
        // screenOptions={{
        //   headerStyle: { backgroundColor: COLORS.darkgray },
        //   headerTintColor: "white",
        //   contentStyle: COLORS.darkgray,
        // }}
        >
          {/* <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false,
            }}
          /> */}

          {/* THE HOME SCREEN */}
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          {/* ADD EXPENSES SCREEN */}
          {/* <Stack.Screen
            name="AddScreen"
            component={AddExpenseScreen}
            options={{
              presentation: "modal",
            }}
          /> */}
        </Stack.Navigator>
        {/* <Bottom.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#8888e8" },
            headerTintColor: "white",
            tabBarStyle: { backgroundColor: "#8888e8" },
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
        </Bottom.Navigator> */}
      </NavigationContainer>
    </>
  );
}
