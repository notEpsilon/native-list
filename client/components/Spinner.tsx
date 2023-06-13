import React from "react";
import { Animated, ColorValue, Easing, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { COLORS } from "../colors";

interface SpinnerProps
  extends Omit<React.ComponentProps<typeof Icon>, "name" | "style"> {
  size?: number;
  color?: ColorValue;
}

const Spinner: React.FC<SpinnerProps> = React.memo(
  ({ size = 18, color = COLORS.white, ...props }) => {
    const spinValue = new Animated.Value(0);

    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });

    return (
      <Animated.View style={{ marginRight: 4, transform: [{ rotate: spin }] }}>
        <Icon name="loader" style={{ color, fontSize: size }} {...props} />
      </Animated.View>
    );
  }
);

export default Spinner;
