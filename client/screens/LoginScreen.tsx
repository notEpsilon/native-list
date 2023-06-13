import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Container from "../components/Container";
import SafePageContainer, {
  SafePageContainerProps,
} from "../components/SafePageContainer";
import { __logo_uri__ } from "../constants";
import LoginForm from "../components/LoginForm";

type LoginScreenProps = SafePageContainerProps;

const LoginScreen: React.FC<LoginScreenProps> = ({ ...props }) => {
  return (
    <SafePageContainer {...props}>
      <Container>
        <View style={styles.logoWrapper}>
          <Image source={{ uri: __logo_uri__ }} style={styles.logo} />
        </View>
        <LoginForm />
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

export default LoginScreen;
