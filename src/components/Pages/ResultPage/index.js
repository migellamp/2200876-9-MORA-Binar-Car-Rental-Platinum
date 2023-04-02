// import { useState } from "react"
import SearchFrameSolo from "../../PageComponent/SearchFrame"
import {
    useLocation
  } from "react-router-dom";

import { useMemo } from "react";


function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

const DetailsPage = () => {
    let query = useQuery();
    const name = query.get("name");
    const status = query.get("isRented");
    const price = query.get("price");
    const category = query.get("category");

    // let minPrice;
    // let maxPrice;
    // let isRented;
    // let categories;

    // if(price === "> Rp.600.000"){
    //     minPrice = "600000";
    //     maxPrice = "10000000";
    // }
    // else if (price === "< Rp.400.000"){
    //     minPrice = "0";
    //     maxPrice = "400000";
    // }
    // else if (price === "Rp.400.000 - Rp.600.000"){
    //     minPrice = "400000";
    //     maxPrice = "600000";
    // }
    // else{
    //     minPrice = "0";
    //     maxPrice = "400000";
    // }

    // if(status === "Disewakan"){
    //     isRented = "false";
    // }
    // else if(status === "Kosong"){
    //     isRented = "true";
    // }
    // else{
    //     isRented = "true";
    // }

    // if(category === "2 - 4 orang"){
    //   categories = "small"}
    // else if(category === "4 - 6 orang"){
    //   categories = "medium"}
    // else if(category === "6 - 8 orang"){
    //   categories = "large"}
    // else {
    //   categories= "small"}

    return (
        <>
            <SearchFrameSolo name={name} status={status} price={price} category={category}/>
        </>
    )
}

export default DetailsPage