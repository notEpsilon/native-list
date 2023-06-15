import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TodoScreen from "./screens/TodoScreen";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { axs } from "./api/axios-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { cleanLoginRedirect } from "./actions/redirects.actions";
import Logout from "./components/Logout";

const Stack = createNativeStackNavigator();

function Register() {
  return (
    <RegisterScreen
      style={{ backgroundColor: COLORS.pageBackground }}
      contentContainerStyle={{ paddingTop: 35 }}
    />
  );
}

function Login() {
  return (
    <LoginScreen
      style={{ backgroundColor: COLORS.pageBackground }}
      contentContainerStyle={{ paddingTop: 35 }}
    />
  );
}

function Todo() {
  return (
    <TodoScreen
      style={{ backgroundColor: COLORS.pageBackground }}
      contentContainerStyle={{ paddingTop: 35 }}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Todos"
          component={Todo}
          options={{ headerRight: () => <Logout /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
