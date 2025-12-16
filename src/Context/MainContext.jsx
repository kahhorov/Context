import { createContext, useReducer } from "react";

export const contextProvider = createContext();

const initionalState = {
  theme: false,
};

const reducer = (state, { type }) => {
  switch (type) {
    case "Change_Theme":
      return { ...state, theme: !state.theme };

    default:
      return state;
  }
};

function MainContext({ children }) {
  const [darkMode, dispatch] = useReducer(reducer, initionalState);
  return (
    <contextProvider.Provider value={{ darkMode, dispatch }}>
      {children}
    </contextProvider.Provider>
  );
}

export default MainContext;
