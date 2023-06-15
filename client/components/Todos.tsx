import React, { useState } from "react";
import {
  View,
  StyleSheet,
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
import { TodoType } from "../types/todo";
import { axs } from "../api/axios-client";

interface TodosProps {
  owner: number;
  todos: TodoType[];
  refetch: (userId: number) => Promise<void>;
}

const Todos: React.FC<TodosProps> = ({ todos, owner, refetch }) => {
  const height = useHeaderHeight();

  const [todoText, setTodoText] = useState<string>("");

  const handleAddTodo = async () => {
    if (!todoText || (todoText && todoText.length === 0)) {
      return;
    }

    try {
      const resp = await axs.post("/todos", { title: todoText, userId: owner });
      setTodoText("");
      await refetch(owner);
    } catch (err) {
      console.error((err as any).response.data);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoiding}
      keyboardVerticalOffset={height + 20}
      behavior="padding"
      enabled
    >
      <View style={styles.wrapper}>
        <Container>
          <ScrollView
            style={styles.todosContainer}
            keyboardShouldPersistTaps="handled"
          >
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} refetch={refetch} />
            ))}
          </ScrollView>
          <View style={styles.inputWrapper}>
            <Input
              style={styles.input}
              placeholder="Add todo..."
              value={todoText}
              onChangeText={setTodoText}
            />
            <TouchableOpacity style={styles.send} onPress={handleAddTodo}>
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
