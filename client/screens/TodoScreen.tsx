import React, { useEffect } from "react";
import { Text } from "react-native";
import Container from "../components/Container";
import SafePageContainer, {
  SafePageContainerProps,
} from "../components/SafePageContainer";

type TodoScreenProps = SafePageContainerProps;

const TodoScreen: React.FC<TodoScreenProps> = ({ ...props }) => {
  useEffect(() => {}, []);

  return (
    <SafePageContainer {...props}>
      <Container center>
        <Text>Todo Screen</Text>
      </Container>
    </SafePageContainer>
  );
};

export default TodoScreen;
