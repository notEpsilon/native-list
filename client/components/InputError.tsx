import React from "react";
import { StyleSheet, View, Text, ViewProps } from "react-native";
import { COLORS } from "../colors";
import Icon from "react-native-vector-icons/MaterialIcons";

type InputErrorProps = ViewProps;

const InputError: React.FC<InputErrorProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <View style={[style, styles.wrapper]} {...props}>
      <Icon name="error-outline" style={styles.errorIcon} />
      <Text style={styles.errorText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  errorText: {
    color: COLORS.red,
    fontWeight: "500",
  },
  errorIcon: {
    color: COLORS.red,
    marginRight: 4,
    fontSize: 15,
  },
});

export default InputError;
