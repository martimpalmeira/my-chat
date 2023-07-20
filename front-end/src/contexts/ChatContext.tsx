import React, { createContext, useState } from "react";
import { IContact } from "../interfaces/IContact";

type ChatContextProps = {
  userSelected: IContact | undefined;
  changeUserSelected: (contact: IContact) => void;
};

const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);

const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userSelected, setUserSelected] = useState<IContact>();

  const changeUserSelected = (user: IContact) => {
    setUserSelected(user);
  };

  return (
    <ChatContext.Provider value={{ userSelected, changeUserSelected }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContextProvider, ChatContext };
