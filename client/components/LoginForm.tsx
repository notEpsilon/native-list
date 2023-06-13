import { Link } from "@react-navigation/native";
import { useFormik } from "formik";
import React from "react";
import {
  GestureResponderEvent,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";
import { COLORS } from "../colors";
import Input from "./Input";
import InputError from "./InputError";
import InputGroup from "./InputGroup";
import Spinner from "./Spinner";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .required("Password is required"),
});

type LoginInfo = yup.InferType<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const formik = useFormik<LoginInfo>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, helpers) => {
      Keyboard.dismiss();
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          helpers.resetForm();
          console.log(values);
          resolve();
        }, 4000);
      });
    },
  });

  return (
    <View>
      {/* Title and Subtitle */}
      <Text style={styles.title}>Log in</Text>
      <Text style={styles.subtitle}>Enter your details to log in</Text>

      {/* Registeration Form */}
      <>
        {/* Email Input */}
        <InputGroup>
          <Input
            style={{
              marginBottom: formik.errors.email && formik.touched.email ? 8 : 0,
            }}
            autoComplete="off"
            placeholder="Email"
            value={formik.values.email}
            autoCapitalize="none"
            iconName="email-outline"
            keyboardType="email-address"
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            iconStyles={{ color: COLORS.blackFaded }}
          />
          {formik.errors.email && formik.touched.email && (
            <InputError>{formik.errors.email}</InputError>
          )}
        </InputGroup>

        {/* Password Input */}
        <InputGroup>
          <Input
            style={{
              marginBottom:
                formik.errors.password && formik.touched.password ? 8 : 0,
            }}
            secureTextEntry
            autoComplete="off"
            autoCapitalize="none"
            placeholder="Password"
            iconName="lock-outline"
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            iconStyles={{ color: COLORS.blackFaded }}
          />
          {formik.errors.password && formik.touched.password && (
            <InputError>{formik.errors.password}</InputError>
          )}
        </InputGroup>

        {/* Submit Button */}
        <TouchableOpacity
          style={[styles.submit, formik.isSubmitting ? { opacity: 0.5 } : null]}
          onPress={
            formik.handleSubmit as unknown as (e: GestureResponderEvent) => void
          }
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting && <Spinner size={18} />}
          <Text style={styles.submitText}>Log in</Text>
        </TouchableOpacity>
      </>

      {/* Login Redirect Link */}
      <Text style={styles.small}>
        Don't have an account yet?{" "}
        <Link to="/Register">
          <Text style={styles.formLink}>Register</Text>
        </Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    marginBottom: 5,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 25,
    color: COLORS.grey,
  },
  submit: {
    borderRadius: 4,
    marginBottom: 15,
    paddingVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.main,
  },
  submitText: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    color: COLORS.white,
  },
  small: {
    color: COLORS.grey,
    fontWeight: "500",
    textAlign: "center",
  },
  formLink: {
    color: COLORS.link,
    textDecorationLine: "underline",
  },
  input: {
    marginBottom: 8,
  },
});

export default LoginForm;
