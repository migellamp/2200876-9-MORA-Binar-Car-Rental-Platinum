import * as React from "react";
import SearchFrameSolo from "../../PageComponent/SearchFrame";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useMemo } from "react";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const DetailsPage = () => {
  const role = localStorage.getItem("role");

  if (document.cookie.includes("uidTokenBinarApp") === false) {
    return <Navigate to="/sign-in" />;
  } else if (role === "Admin") {
    return <Navigate to="/sign-in" />;
  }
  let query = useQuery();
  const name = query.get("name");
  const carStatus = query.get("isRented");
  const price = query.get("price");
  const category = query.get("category");
  return (
    <>
      <SearchFrameSolo
        name={name}
        carStatus={carStatus}
        price={price}
        category={category}
      />
    </>
  );
};

export default DetailsPage;
