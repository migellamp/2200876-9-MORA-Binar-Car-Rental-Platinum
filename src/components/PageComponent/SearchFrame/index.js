import SearchFormInput from "../../../components/PageComponent/SearchForm/InputForm"
import '../SearchFrame/style.css'
import { useState } from "react"
import SelectFormInput from "../../PageComponent/SearchForm/SelectForm"
import { categoryList, priceList, statusList } from "../../PageComponent/SearchForm/constanta"
import { useEffect } from "react"
// import { getCarList } from "../../../API/api"
// import { alignPropType } from "react-bootstrap/esm/types"
// import { calculateNewValue } from "@testing-library/user-event/dist/utils"
import axios from "axios"
// import { SearchFrame } from "../../Pages/SearchCar/SearchCarPage"
import Navbar from "../Navbar"
import { Link } from "react-router-dom"
import Footer from '../../PageComponent/Footer/index'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';



const SearchFrameSolo = ({name, status, price, category}) => {
    // category -> '2-4 orang'
    // status -> 'Disewakan
    // price -> '>600000'
    const [state, setState] = useState([]);
    const [carNameState, setCarName] = useState(name)
    const [categoryState, setCategory] = useState(category)
    const [priceState, setPrice] = useState(price)
    const [statusState, setStatus] = useState(status)
    const [nullData, setNullData] = useState(false)
    const [loading, setLoading] = useState(false);

    let min, max,categories,isRented;
    let minNew, maxNew;

    if(category === "2 - 4 orang"){
        categories = "small"}
    else if(category === "4 - 6 orang"){
        categories = "medium"}
    else if(category  === "6 - 8 orang"){
        categories = "large"}

    if(status === "Disewakan"){
        isRented = "false";}
    else if(status === "Kosong"){
        isRented = "true";}

    if(price === "> Rp.600.000"){
        min = "600000";
        max = "10000000";}
    else if (price === "< Rp.400.000"){
        min = "0";
        max = "400000";}
    else if (price === "Rp.400.000 - Rp.600.000"){
        min = "400000";
        max = "600000";}

    const getCarList = async() => {
        const cars = await (await axios.get(`${process.env.REACT_APP_BASEURL}/customer/v2/car?name=${name}&category=${categories}&isRented=${isRented}&minPrice=${min}&maxPrice=${max}&page1=&pageSize=10`))
        console.log(`${process.env.REACT_APP_BASEURL}/customer/v2/car?name=${name}&category=${categories}&isRented=${isRented}&minPrice=${min}&maxPrice=${max}&page1=&pageSize=10`)
        setState(cars.data.cars)
    }

    useEffect(() => {
        document.getElementById('category-select').value = category;
        document.getElementById('price-select').value = price;
        document.getElementById('status-select').value = status;
        getCarList();
        // eslint-disable-next-line 
    },[]);    

    if(priceState === "> Rp.600.000"){
        minNew = "600000";
        maxNew = "10000000";}
    else if (priceState === "< Rp.400.000"){
        minNew = "0";
        maxNew = "400000";}
    else if (priceState === "Rp.400.000 - Rp.600.000"){
        minNew = "400000";
        maxNew = "600000";}

    if(statusState === "Disewakan"){
        setStatus("false")}
    else if(statusState === "Kosong"){
        setStatus("true")}

    if(categoryState === "2 - 4 orang"){
        setCategory("small")}
    else if(categoryState === "4 - 6 orang"){
        setCategory("medium")}
    else if(categoryState  === "6 - 8 orang"){
        setCategory("large")}
    // useEffect(()=>{
    //     setCarName(name);
    //     setCategory(category);
    //     setPrice(price);
    //     setStatus(status);
    // },[name, category, price, status])

    const CallApi = async(url) => {
        setLoading(true);
        const cars = await (await axios.get(url))
        setState(cars.data.cars)
        enableAll()
        handleButtonOnClick()
        setLoading(false);
    }

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleButtonOnClick = () => {
        const callbackState = (previousState) => {
          return !previousState;
        };
    
        setNullData(callbackState);
    };

    const disableAll = () =>{
        document.getElementById('category-select').disabled = false;
        document.getElementById('price-select').disabled = false;
        document.getElementById('status-select').disabled = false;
        document.getElementById('car-select').disabled = false;
    }
    const enableAll = () =>{
        document.getElementById('category-select').disabled = true;
        document.getElementById('price-select').disabled = true;
        document.getElementById('status-select').disabled = true;
        document.getElementById('car-select').disabled = true;
    }

    const numberFormat = (value) =>
    new Intl.NumberFormat('id', {
        style: 'currency',
        currency: 'IDR'
    }).format(value);

    return (
        <>
        <Navbar/>
        <div className="background-only"></div>
        {/* <h6 className="search-title-search-frame" style={
                {
                    position:"absolute",
                    left:0,
                    top:210,
                    zIndex:1
                }
            }>Pencarianmu</h6> */}
        <div className="form">
            <div className="form-container form-container-search-frame" style={{top: 195, height:130, paddingTop:20}}>
                <div className="form-wrapper form-wrapper-search-frame">
                    <SearchFormInput labelName="Nama Mobil" callState={setCarName} defaultValue={carNameState} id="car-select" disabled/>
                    <SelectFormInput labelName="Kategori" callState={setCategory} arrayList={categoryList} id="category-select" value={categoryState} disabled/>
                    <SelectFormInput labelName="Harga" callState={setPrice} arrayList={priceList} id="price-select" value={priceState} disabled/>
                    <SelectFormInput labelName="Status" callState={setStatus} arrayList={statusList} id="status-select" value={statusState} disabled/>
                    <span className="button-container">
                    {
                        nullData ? (
                            <Link to={`/car-result/?name=${carNameState}&isRented=${status}&price=${priceState}&category=${categoryState}`} style={{textDecoration: "none"}}>
                            <Button
                                color="primary"
                                onClick={
                                    ()=>{
                                        CallApi(`${process.env.REACT_APP_BASEURL}/customer/v2/car?name=${carNameState}&category=${categoryState}&isRented=${statusState}&minPrice=${minNew}&maxPrice=${maxNew}&page1=&pageSize=10`)
                                        console.log(`${process.env.REACT_APP_BASEURL}/customer/v2/car?name=${carNameState}&category=${categoryState}&isRented=${statusState}&minPrice=${minNew}&maxPrice=${maxNew}&page1=&pageSize=10`)
                                    }
                                }
                                type="button"
                                name=""
                                id=""
                                style={{
                                    fontSize:14,
                                    backgroundColor: "white",
                                    border: "1px solid #0D28A6",
                                    color: "#0D28A6",
                                    width: 100,
                                    height: 36,
                                    borderRadius: 2,
                                    textDecoration: "none"
                                }}
                                className="btn btn-primary btn-lg btn-block"
                                >       
                                {loading ? (
                                <>
                                    <Spinner size="sm"></Spinner>
                                </>
                                ) : (
                                <>Cari Mobil</>
                                )}
                            </Button>
                            </Link>
                        ) :
                        <button 
                            className="search-button-edit"
                            onClick={
                                ()=>{
                                    disableAll();
                                    handleButtonOnClick()
                                    // CallApi(`${process.env.REACT_APP_BASEURL}/customer/v2/car?name=${carNameState}&category=${categories}&category=${capitalizeFirst(categories)}&isRented=${isRented}&minPrice=${min}&maxPrice=${max}&page1=&pageSize=10`)
                                }
                            }
                            >Edit
                        </button>
                    }
                    </span>    
                </div>
            </div>
        </div>
        <div className="container">
            <div className="car-container">
                <div className="car-wrapper">
                {
                    
                    state.length === 0 ? (
                        <h6>Data Mobil Tidak Ditemukan</h6>
                    ) : (
                    state.map((value)=>{
                    return (       
                        <div className="car-sleeve" key={value.id}>
                            <img className="mb-3" src={value.image} alt="" />
                            <div className="car-name mb-2">{capitalizeFirst(value.name)}</div>
                            <div className="car-price mb-3">{numberFormat(value.price)} / hari</div>
                            <div className="car-desc mb-4">Mobil ini memiliki spesifikasi, desain, dan fitur yang serbamewah dan tidak terdapat pada versi mobil lainnya, apalagi kategori mobil biasa.</div>
                            <Link style={{textDecoration:"none"}} to={`/car-details?idCar=${value.id}`}><button className="button-car">Pilih Mobil</button></Link>
                        </div>
                    )})
                    )
                }
                </div>
            </div>
        </div>
        <div className="container-footer-search">
            <Footer/>
        </div>
        </>
    )
}

export default SearchFrameSolo
