import { CommonActions } from "@react-navigation/native";

// note: this is type-unsafe because of `expo` problems
// they have to fix it.
export const cleanTodosRedirect = (nav: any) => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: "Todos" }],
  });

  nav.dispatch(resetAction);
};

export const cleanLoginRedirect = (nav: any) => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: "Login" }],
  });

  nav.dispatch(resetAction);
};
