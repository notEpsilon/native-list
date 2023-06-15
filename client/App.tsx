import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KeyboardAvoidingView } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TodoScreen from "./screens/TodoScreen";
import { COLORS } from "./colors";

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
        <Stack.Screen name="Todos" component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
