import React, { createContext, useState } from "react";

export const messageContext = createContext(null);

// eslint-disable-next-line react/prop-types
const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const setMessageHandling = (param) => {
    setShowMessage(true);
    setMessage(param);
    setTimeout(() => {
        setShowMessage(true);
    }, 5000);
  };

  return (
    <messageContext.Provider
      value={{ message, setMessageHandling, showMessage }}
    >
      {children}
    </messageContext.Provider>
  );
};

export default MessageProvider;
