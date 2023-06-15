import * as React from "react";
import { useContext, useState } from "react";
import PaymentPage from ".";
import { SelectPaymentContext } from "../../context/paymentMethod";

const FinishPayment = () => {
  const { payment } = useContext(SelectPaymentContext);
  const { method } = payment || {};
  const [isBackPayment, setIsBackPayment] = useState(false);
  const backToFirstPaymentPage = () => {
    setIsBackPayment(true);
  };
  if (isBackPayment === true) return <PaymentPage></PaymentPage>;
  return (
    <div>
      <h1>Lanjutkan Pembayaran dengan {method}</h1>
      <button onClick={backToFirstPaymentPage}>Back</button>
    </div>
  );
};

export default FinishPayment;
