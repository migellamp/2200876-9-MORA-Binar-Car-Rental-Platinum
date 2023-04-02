import '../InputForm/style.css'

const SearchFormInput = ({labelName, callState, defaultValue, disabled, id,widthStyle}) =>{
    const getValue = (e) => {
        callState(e.target.value);
    }
    return (
        <div className="form-group wrapper-input-form">
            <label className='label-input-form' for="">{labelName}</label>
            <input 
                type="text" 
                name="" 
                id={id} 
                className="form-control input-form"
                placeholder="Ketik nama/tipe mobil" 
                aria-describedby="helpId"
                onChange={getValue}
                defaultValue={defaultValue}
                disabled={disabled}
                style={{width:widthStyle}}
            />
        </div>
    )
}

export default SearchFormInput