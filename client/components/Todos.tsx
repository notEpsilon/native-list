import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import Container from "./Container";
import { COLORS } from "../colors";
import Input from "./Input";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Todo from "./Todo";

interface TodosProps {
  userToken: string;
}

const Todos: React.FC<TodosProps> = ({ userToken }) => {
  const height = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoiding}
      keyboardVerticalOffset={height + 20}
      behavior="padding"
      enabled
    >
      <View style={styles.wrapper}>
        <Container>
          <ScrollView style={styles.todosContainer}>
            {Array(400)
              .fill(0)
              .map((e, i) => (
                <Todo key={i} todo={{ title: `Todo #${i + 1}`, done: false }} />
              ))}
          </ScrollView>
          <View style={styles.inputWrapper}>
            <Input style={styles.input} placeholder="Add todo..." />
            <TouchableOpacity style={styles.send}>
              <Icon name="plus-box-outline" style={styles.sendIcon} />
            </TouchableOpacity>
          </View>
        </Container>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
    justifyContent: "flex-start",
  },
  wrapper: {
    height: "90%",
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: 8,
    paddingVertical: 25,
  },
  todosContainer: {
    marginBottom: 18,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flexBasis: "90%",
  },
  icon: {
    color: COLORS.grey,
  },
  send: {
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "10%",
  },
  sendIcon: {
    fontSize: 28,
    marginLeft: 4,
    color: COLORS.grey,
  },
});

export default Todos;
