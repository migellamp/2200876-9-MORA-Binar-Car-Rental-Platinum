import axios from "axios"

export const getCarList = async({car,carStatus,min,max}) => {
    const carList = await axios.get(
    
    //     `${process.env.REACT_APP_BASEURL}/customer/v2/
    //     car?
    //     isRented=${isRented}&
    //     minPrice=${minPrice}&
    //     maxPrice=${maxPrice}&
    //     page1=&pageSize=10
    // `
    `${process.env.REACT_APP_BASEURL}/customer/v2/car?name=${car}&isRented=${carStatus}&minPrice=${min}&maxPrice=${max}&page1=&pageSize=10
    `
    )
    return carList.data.cars
}
