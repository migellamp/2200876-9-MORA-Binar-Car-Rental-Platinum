import * as React from "react";
import { createContext } from "react";
import { useState } from "react";
import node from "prop-types";

export const SelectPaymentContext = createContext(null);

const SelectPaymentProvider = ({ children }) => {
  const PaymentState = {
    method: "",
  };
  const [payment, setPayment] = useState(PaymentState);
  const obj = {
    payment,
    setPayment,
  };
  return (
    <SelectPaymentContext.Provider value={obj}>
      {children}
    </SelectPaymentContext.Provider>
  );
};

SelectPaymentProvider.propTypes = {
  children: node.isRequired,
};

export default SelectPaymentProvider;
