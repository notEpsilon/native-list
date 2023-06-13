import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { COLORS } from "../colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface InputProps extends TextInputProps {
  iconName?: string;
  iconStyles?: React.ComponentProps<typeof Icon>["style"];
}

const Input: React.FC<InputProps> = ({
  iconName,
  iconStyles,
  style,
  ...props
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      {iconName && <Icon style={[styles.icon, iconStyles]} name={iconName} />}
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 40,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    borderColor: COLORS.lightGrey,
    backgroundColor: COLORS.white,
    alignItems: "center",
    borderRadius: 4,
  },
  input: {
    flex: 1,
    alignSelf: "stretch",
  },
  icon: {
    fontSize: 20,
    marginRight: 4,
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default Input;
