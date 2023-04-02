import CardComponent from '../../components/Card/index';
import InputForm from '../../components/SearchComponent/InputForm';
import SelectForm from '../../components/SearchComponent/SelectForm';
import { carCategory, priceCategory, statusCategory} from '../../components/SearchComponent/SelectForm/const';
import { useState } from 'react';

const SearchComponent = () =>{
    const [carName, setCarName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');

    const [displayResult, setDisplayResult] = useState(false);

    return(
    <>
        <div className="card-container">
        <CardComponent name="Card 1" ages="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <CardComponent name="Card 2" ages="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <CardComponent name="Card 3" ages="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <CardComponent name="Card 4" ages="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        </div>

        <InputForm 
            labelName="Nama Mobil :" 
            carValue={carName}
            onChange={setCarName}
        />
        <SelectForm 
            labelName="Kategori :" 
            arrofInput={carCategory}
            onChange={setCategory}
            placeholderName="Masukkan Kapasitas Mobil"
        />
        <SelectForm 
            labelName="Harga :" 
            arrofInput={priceCategory}
            onChange={setPrice}
            placeholderName="Masukkan Harga Sewa per Hari"
        />
        <SelectForm 
            labelName="Status :" 
            arrofInput={statusCategory}
            onChange={setStatus}
            placeholderName="Pilih Status"
        />
        <button className='btn btn-primary' onClick={()=>{
            if(displayResult){
                setDisplayResult(false)
            }else{
                setDisplayResult(true)
            }
        }}>Cari Mobil</button>

        <h1>Result </h1>
        {
            displayResult && (
                <>
                    <p>{carName}</p>
                    <p>{category}</p>
                    <p>{price}</p>
                    <p>{status}</p>
                </>
            )
        }
    </>
    )
}
export default SearchComponent