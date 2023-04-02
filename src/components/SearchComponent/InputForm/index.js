
const InputForm = ({labelName, carValue, onChange}) => {
    const printmyName = (e) => {  
        const inputValue = e.target.value;
        onChange(inputValue);
    }
    return (
        <div className="mb-4">
            <div className="label">
                <label>{labelName}</label>
            </div>
            <input className="form-control" type="text" placeholder="Ketik nama/tipe mobil" onChange={printmyName} value={carValue} style={{width:300}}/>
        </div>
    );
}

export default InputForm