import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

type InputGroupProps = ViewProps;

const InputGroup: React.FC<InputGroupProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <View style={[style, styles.wrapper]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 18,
  },
});

export default InputGroup;
