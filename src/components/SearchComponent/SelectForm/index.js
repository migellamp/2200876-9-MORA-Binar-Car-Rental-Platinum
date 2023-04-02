const SelectForm = ({labelName, arrofInput, onChange, placeholderName})=>{

    const clickHandler = (e)=>{
        const val = e.target.value
        onChange(val);
    }
    return(
        <div className="form-container mb-4">
            <div className="label">
                <label>{labelName}</label>
            </div>
            <select onChange={clickHandler} className="form-control" style={{width:300}} name="" id=""> 
            <option selected>{placeholderName}</option>
            {
                arrofInput.map(({_,text})=>{
                    return(
                        <>
                        <option value={text}>{text}</option>
                        </>
                    ) 
                })
            }
            </select>
        </div>
    )
}

export default SelectForm