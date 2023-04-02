import Navbar from "../../../components/PageComponent/Navbar"
// import Banner from "../../../components/PageComponent/Banner/index"
import SearchFormInput from "../../../components/PageComponent/SearchForm/InputForm"
import './style.css'
import { useState } from "react"
import SelectFormInput from "../../PageComponent/SearchForm/SelectForm"
import { categoryList, priceList, statusList } from "../../PageComponent/SearchForm/constanta"
// import { useEffect } from "react"
// import { getCarList } from "../../../API/api"
import { Link } from "react-router-dom"
// import SearchFrameSolo from "../../PageComponent/SearchFrame"
// import userEvent from "@testing-library/user-event"
import BannerSearch from "../../PageComponent/BannerSearc"
import Footer from '../../PageComponent/Footer/index'

export const SearchFrame = ({topNumber}) => {
    // const navigate = useNavigate();

    const [carName, setCarName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState("")
    // const [inputForm, setInputForm] = useState("");

    return (
        <div className="form">
            <div className="form-container form-container-search-page" style={{top: topNumber}}>
                <div className="form-wrapper form-wrapper-search-page">
                    <SearchFormInput labelName="Nama Mobil" callState={setCarName}/>
                    <SelectFormInput labelName="Kategori" callState={setCategory} arrayList={categoryList}/>
                    <SelectFormInput labelName="Harga" callState={setPrice} arrayList={priceList}/>
                    <SelectFormInput labelName="Status" callState={setStatus} arrayList={statusList}/>
                    <span className="button-container">
                        <Link to={`/car-result/?name=${carName}&isRented=${status}&price=${price}&category=${category}`} style={{textDecoration: "none", color: "white"}}><button 
                            className="search-button"
                            >Cari Mobil
                        </button></Link>
                    </span>    
                </div>
            </div>
        </div>
    )
}

const SearchCarPage = () => {
    return (
        <>
            <Navbar/>
            <BannerSearch/>
            <SearchFrame topNumber="458px"/>
            <Footer/>
            {/* <SearchFrame/> */}
        </>
    );
}

export default SearchCarPage