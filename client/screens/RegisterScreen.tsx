import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Container from "../components/Container";
import RegisterForm from "../components/RegisterForm";
import SafePageContainer, {
  SafePageContainerProps,
} from "../components/SafePageContainer";
import { __logo_uri__ } from "../constants";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axs } from "../api/axios-client";
import { useNavigation } from "@react-navigation/native";
import { cleanTodosRedirect } from "../actions/redirects.actions";

type RegisterScreenProps = SafePageContainerProps;
type VerifyResponse = { valid: boolean };

const RegisterScreen: React.FC<RegisterScreenProps> = ({ ...props }) => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("access_token");
      if (!token) {
        return;
      }
      try {
        const resp = await axs.post<VerifyResponse>("/auth/verify_token", {
          token,
        });
        if (!resp.data.valid) {
          return;
        }
        cleanTodosRedirect(navigation);
      } catch (err) {
        console.error((err as any).response.data);
      }
    })();
  }, []);

  return (
    <SafePageContainer {...props}>
      <Container>
        <View style={styles.logoWrapper}>
          <Image source={{ uri: __logo_uri__ }} style={styles.logo} />
        </View>
        <RegisterForm />
      </Container>
    </SafePageContainer>
  );
};

const styles = StyleSheet.create({
  logoWrapper: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    height: 55,
    width: "80%",
  },
});

export default RegisterScreen;
