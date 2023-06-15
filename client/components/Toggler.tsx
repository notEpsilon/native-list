import React from "react";
import { Switch } from "react-native";
import { useToggle } from "../hooks/hooks";
import { COLORS } from "../colors";

interface TogglerProps {}

const Toggler: React.FC<TogglerProps> = () => {
  const [isEnabled, toggleSwitch] = useToggle(false);

  return (
    <Switch
      trackColor={{ false: "#767577", true: "#4ade80" }}
      thumbColor={isEnabled ? "f5dd4b" : "#f4f3f4"}
      ios_backgroundColor={COLORS.lightGrey}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default Toggler;
