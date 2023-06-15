import React from "react";
import { TodoType } from "../types/todo";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../colors";
import Container from "./Container";

interface TodoProps {
  todo: TodoType;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <View style={styles.wrapper}>
      <Container style={styles.container}>
        <Text>{todo.title}</Text>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 0.9,
    borderBottomColor: COLORS.lightGrey,
    marginBottom: 3,
  },
  container: {
    paddingVertical: 12,
  },
});

export default Todo;
