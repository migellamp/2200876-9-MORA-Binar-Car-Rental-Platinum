import Navbar from "../../PageComponent/Navbar"
import userIcon from '../../../image/icon_users.png'
import Footer from '../../PageComponent/Footer/index'
import '../CarDetailsPage/style.css'
import { useContext, useState, useEffect } from "react"
import { SearchedCarContext } from "../../context/searchedCar"
import './style.css'


const PaymentPage = () => {
    const styles = {
        size14medium: {
            fontFamily: 'Arial',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
        },
        size14: {
            fontFamily: 'Arial',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#8A8A8A",
        },
        size14bold: {
            fontFamily: 'Arial',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "20px",
        },
    };

      
    const { searchedCar } = useContext(SearchedCarContext)

    const { namaMobil, kategori} = searchedCar || {}
    const [paymentMethod, setPaymentMethod] = useState("")

    const setPayment = (val) => {
        setPaymentMethod(val)
    }
    useEffect(()=>{
        console.log(paymentMethod)
    },[paymentMethod, setPaymentMethod])
    return (
        <>
            <Navbar/>
            <div className="background-only"></div>
            <div className="form mb-5">
                <div className="form-container container-payment-header" style={{top: 195, height:130, paddingTop:20}}>
                <h6 className="detailPesananmu-text">Detail Pesananmu</h6>
                    <div className="payment-form-wrapper wrapper-payment-header">
                        <div className="payment-head-item payment-car">
                            <h5 style={styles.size14medium}>Nama/Tipe Mobil</h5>
                            <h5 style={styles.size14}>{namaMobil}</h5>
                        </div>
                        <div className="payment-head-item payment-category">
                            <h5 style={styles.size14medium}>Kategori</h5>
                            <h5 style={styles.size14}>{kategori}</h5>
                        </div>
                        <div className="payment-head-item payment-start">
                            <h5 style={styles.size14medium}>Tanggal Mulai Sewa</h5>
                            <h5 style={styles.size14}>"belom"</h5>
                        </div>
                        <div className="payment-head-item payment-end">
                            <h5 style={styles.size14medium}>Tanggal Akhir Sewa</h5>
                            <h5 style={styles.size14}>"belom"</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-all">
            <div className="container-details-car">
                <div className="wrapper-description-car mt-5">
                    <h5 style={styles.size14bold} >Pilih Bank Transfer</h5>
                    <h5 style={styles.size14medium} className="mb-3">Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</h5>
                    <div className="payment-method-list">
                        <button className="buttonPayMethod" onClick={()=>setPayment("BCA")}>
                            <div className="payment-body-button">
                                <h6 className="firstItem">BCA</h6>
                                <h6 className="secItem">BCA Transfer</h6>
                                {(paymentMethod === "BCA") &&
                                <>
                                    <i style={{float:"right", marginLeft:55, color:"#5CB85F"}} class="fa fa-check" aria-hidden="true"></i>
                                </>
                                }
                            </div>
                        </button>
                        <button className="buttonPayMethod" onClick={()=>setPayment("BNI")}>
                            <div className="payment-body-button">
                                <h6 className="firstItem">BNI</h6>
                                <h6 className="secItem">BNI Transfer</h6>
                                {(paymentMethod === "BNI") &&   
                                <>
                                    <i style={{float:"right", marginLeft:55, color:"#5CB85F"}} class="fa fa-check" aria-hidden="true"></i>
                                </> 
                                }   
                            </div>
      
                        </button>
                        <button className="buttonPayMethod" onClick={()=>setPayment("Mandiri")}>
                            <div className="payment-body-button">
                                <h6 className="firstItemMandiri">Mandiri</h6>
                                <h6 className="secItem">Mandiri Transfer</h6>
                                {(paymentMethod === "Mandiri") &&
                                <>
                                    <i style={{float:"right", marginLeft:55, color:"#5CB85F"}} class="fa fa-check" aria-hidden="true"></i>
                                </>
                                }
                            </div>
                        </button>

                    </div>

                </div>

                <div className="wrapper-info-car mt-5">
                    <img className="car-details-pic mb-4" id="img-car-detail" src="" alt="" />
                    <h6>Nama Mobil</h6>
                    <p className="category-detail-cars"><img src={userIcon} alt="" />Kategori</p>
                    <div className="total-details-cars">
                        <span><h6 style={{display:"inline-block"}}>Total</h6></span>
                        <span><h6 style={{float:"right"}}>Test</h6></span>
                    </div>
                    {/* <Link to={('/search')}><button className="btn btn-success">Back</button></Link>
                    <Link to={('/search')}><button style={{float:"right"}} className="btn btn-success">Checkout</button></Link> */}
                </div>
            </div>
            </div>
            <Footer/>
            {/* {
                carId.map((value)=>{
                    return (       
                        <>
                        <h1>{value.name}</h1>
                        </>
                    )
                })
            } */}
        </>
    )
}
export default PaymentPage