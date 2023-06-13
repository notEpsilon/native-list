import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

function Register() {
  return (
    <RegisterScreen
      style={{ backgroundColor: "#f8fafc" }}
      contentContainerStyle={{ paddingTop: 35 }}
    />
  );
}

function Login() {
  return (
    <LoginScreen
      style={{ backgroundColor: "#f8fafc" }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
