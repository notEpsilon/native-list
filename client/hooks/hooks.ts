import { useState } from "react";
import { axs } from "../api/axios-client";
import Toast from "react-native-toast-message";

const useTodoToggle = (
  initialState: boolean,
  todoId: number
): [boolean, () => void] => {
  const [isEnabled, setIsEnabled] = useState<boolean>(initialState);

  const toggle = async () => {
    try {
      const resp = await axs.post<{ newState: boolean }>("/todos/toggle", {
        id: todoId,
        currentState: isEnabled,
      });
      setIsEnabled(resp.data.newState);
    } catch (err) {
      Toast.show({
        type: "error",
        position: "top",
        visibilityTime: 3000,
        text1: "Can't toggle todo",
        text2: (err as any).response.data,
      });
    }
  };

  return [isEnabled, toggle];
};

export { useTodoToggle };
