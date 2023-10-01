import React, { createContext } from "react";
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const user = { name: "Rubel Hasan" };
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
