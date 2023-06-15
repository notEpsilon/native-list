import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { cleanLoginRedirect } from "../actions/redirects.actions";
import { COLORS } from "../colors";

interface LogoutProps {}

const Logout: React.FC<LogoutProps> = () => {
  const navigation = useNavigation<any>();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("access_token");
    cleanLoginRedirect(navigation);
  };

  return (
    <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
      <Text style={styles.logoutTxt}>Log out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoutBtn: {
    backgroundColor: "#f87171",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  logoutTxt: {
    color: COLORS.white,
  },
});

export default Logout;
