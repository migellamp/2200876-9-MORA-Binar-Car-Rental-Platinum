import '../SelectForm/style.css'


const SelectFormInput = ({labelName, callState, arrayList, selected, id, disabled, widthStyle}) =>{
    const getValue = (e) => {
        callState(e.target.value);
    }
    return (
        <div className="form-group wrapper-input-form">
            <label className='label-input-form' for="">{labelName}</label>
                <select onChange={getValue} defaultValue={selected} className="form-select input-form" name="" id={id} disabled={disabled} style={{width:widthStyle}}>
                {
                    arrayList.map((value)=>{
                        return <option value={value.text} key={value.id}>{value.text}</option>
                    })
                }
                    {/* <option selected>Select one</option> */}
            </select>
        </div>
    )
}

export default SelectFormInput