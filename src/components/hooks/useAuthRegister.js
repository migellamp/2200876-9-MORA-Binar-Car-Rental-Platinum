import { useState } from "react";

const useAuthRegister = () => {
  const CAR_API = "https://api-car-rental.binaracademy.org";

  const [dataAuthRegister, setDataAuthRegister] = useState({});

  const postAuthRegister = (param) => {
    fetch(`${CAR_API}/customer/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    })
      .then((res) => res.json())
      .then((result) => {
        setDataAuthRegister(result);
      });
  };

  return [
    postAuthRegister,
    {
      dataAuthRegister,
    },
  ];
};

export default useAuthRegister;
