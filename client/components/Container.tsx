import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

interface ContainerProps extends ViewProps {
  center?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  center,
  style,
  children,
  ...props
}) => {
  return (
    <View
      style={[
        styles.container,
        style,
        center ? { justifyContent: "center", alignItems: "center" } : null,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Container;
