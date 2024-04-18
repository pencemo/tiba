import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userValue, setUserValue] = useState(null);

  const updateUserValue = (newValue) => {
    setUserValue(newValue);
  };

  return (
    <UserContext.Provider value={{ userValue, updateUserValue }}>
      {children}
    </UserContext.Provider>
  );
}
