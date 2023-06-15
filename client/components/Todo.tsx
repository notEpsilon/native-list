import React from "react";
import { TodoType } from "../types/todo";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { COLORS } from "../colors";
import Container from "./Container";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Toggler from "./Toggler";
import { useTodoToggle } from "../hooks/hooks";
import { axs } from "../api/axios-client";

interface TodoProps {
  todo: TodoType;
  refetch: (userId: number) => Promise<void>;
}

const Todo: React.FC<TodoProps> = ({ todo, refetch }) => {
  const [isEnabled, toggleSwitch] = useTodoToggle(todo.done, todo.id);

  const showDeleteConfirmation = () => {
    Alert.alert(
      "Are you sure?",
      "This will permanentaly remove the selected todo",
      [
        {
          text: "Yes",
          onPress: deleteSelf,
        },
        {
          text: "No",
        },
      ]
    );
  };

  const deleteSelf = async () => {
    try {
      await axs.delete(`/todos/${todo.id}`);
      await refetch(todo.userId);
    } catch (err) {
      console.error((err as any).response.data);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Container style={styles.container}>
        <View>
          <Text
            style={{ textDecorationLine: isEnabled ? "line-through" : "none" }}
          >
            {todo.title}
          </Text>
        </View>
        <View style={styles.todoActions}>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={showDeleteConfirmation}
          >
            <Icon style={styles.icon} name="trash-can-outline" />
          </TouchableOpacity>
          <Toggler value={isEnabled} onChange={toggleSwitch} />
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
  todoActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    color: "#f87171",
  },
  actionBtn: {
    marginRight: 7,
    paddingRight: 4,
    borderRightWidth: 1,
    borderRightColor: COLORS.lightGrey,
  },
});

export default Todo;
