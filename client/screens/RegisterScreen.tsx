import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Container from "../components/Container";
import RegisterForm from "../components/RegisterForm";
import SafePageContainer, {
  SafePageContainerProps,
} from "../components/SafePageContainer";
import { __logo_uri__ } from "../constants";

type RegisterScreenProps = SafePageContainerProps;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ ...props }) => {
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
