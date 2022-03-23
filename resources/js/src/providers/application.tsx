import React, { createContext, useState } from "react";

export const ApplicationContext:any  = createContext({});

export const ApplicationProvider: React.FC = (props) => {
  const [appState, setAppState] = useState({
    username: "John Doe",
  });

  return (
    <ApplicationContext.Provider value={{appState, setAppState}}>
      {props.children}
    </ApplicationContext.Provider>
  );
};
