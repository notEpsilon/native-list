import React from "react";
import { Switch } from "react-native";
import { COLORS } from "../colors";

interface TogglerProps {
  value?: boolean | undefined;
  onChange?: ((value: boolean) => void | Promise<void>) | null;
}

const Toggler: React.FC<TogglerProps> = ({ value, onChange }) => {
  return (
    <Switch
      trackColor={{ false: "#767577", true: "#4ade80" }}
      thumbColor={value ? "f5dd4b" : "#f4f3f4"}
      ios_backgroundColor={COLORS.lightGrey}
      onValueChange={onChange}
      value={value}
    />
  );
};

export default Toggler;
