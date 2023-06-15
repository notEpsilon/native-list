import React from "react";
import { TodoType } from "../types/todo";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../colors";
import Container from "./Container";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Toggler from "./Toggler";

interface TodoProps {
  todo: TodoType;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <View style={styles.wrapper}>
      <Container style={styles.container}>
        <View>
          <Text>{todo.title}</Text>
        </View>
        <View>
          <Toggler />
        </View>
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
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Todo;
