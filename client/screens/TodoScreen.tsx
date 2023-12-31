import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text } from "react-native";
import { cleanLoginRedirect } from "../actions/redirects.actions";
import { axs } from "../api/axios-client";
import Container from "../components/Container";
import SafePageContainer, {
  SafePageContainerProps,
} from "../components/SafePageContainer";
import Todos from "../components/Todos";
import { TodoType } from "../types/todo";

type TodoScreenProps = SafePageContainerProps;

const TodoScreen: React.FC<TodoScreenProps> = ({ ...props }) => {
  const navigation = useNavigation<any>();

  const [owner, setOwner] = useState<number>(0);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [displayName, setDisplayName] = useState<string>("");

  const fetchTodos = useCallback(async (userId: number) => {
    const resp = await axs.get<{ todos: TodoType[] }>(`/todos/${userId}`);
    setTodos(resp.data.todos);
  }, []);

  useEffect(() => {
    (async () => {
      // check if user has a token
      const token = await AsyncStorage.getItem("access_token");

      if (!token) {
        cleanLoginRedirect(navigation);
        return;
      }

      try {
        // verify token is valid (not expired)
        const resp1 = await axs.post<{ valid: boolean }>("/auth/verify_token", {
          token,
        });

        if (!resp1.data.valid) {
          cleanLoginRedirect(navigation);
          return;
        }

        // find user's email using his access_token
        const resp2 = await axs.post<{ id: number; email: string }>(
          "/auth/safe_info_from_token",
          { token }
        );

        setDisplayName(resp2.data.email.split("@")[0]);
        setOwner(resp2.data.id);

        await fetchTodos(resp2.data.id);
      } catch (err) {
        console.error((err as any).response.data);
      }
    })();
  }, []);

  return (
    <SafePageContainer {...props}>
      <Container>
        <Text style={styles.title}>
          {displayName}
          {displayName && "'s"} Todos
        </Text>
        <Todos todos={todos} refetch={fetchTodos} owner={owner} />
      </Container>
    </SafePageContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
});

export default TodoScreen;
