import React, { createContext, useReducer } from "react";

type AppState = typeof initialState;
type Action =
  | { type: "LOGIN"; payload: Object }
  | { type: "REGISTER"; payload: Object };

interface InputProviderProps {
  children: React.ReactNode;
}

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")!),
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        currentUser: action.payload,
      };
    case "REGISTER":
      return {
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

const InputValueContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function InputValueProvider({ children }: InputProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InputValueContext.Provider value={{ state, dispatch }}>
      {children}
    </InputValueContext.Provider>
  );
}

export { InputValueContext, InputValueProvider };
