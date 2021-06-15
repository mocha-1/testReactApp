import * as React from "react";

type SetValue = (value: any) => void;
export type ContextType = {
    token: string;
    setToken: SetValue;
}

const initial = {
    token: "",
    setToken: (value: any) => console.log(value)
 }

export const TokenContext = React.createContext(initial);

const TokenProvider: React.FC = ({children}) => {
  const [token, setToken] = React.useState("");

  return (
    <TokenContext.Provider
      value={{
        token, setToken
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;

