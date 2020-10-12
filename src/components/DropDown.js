import React, {useState, useEffect, useRef} from 'react'

const DropDown = ({options, selected, onSelectedChange, label}) => {
 
    const [open, setOpen] = useState(false)
    const ref = useRef()
    let styles = {
        color : selected.value
    }
    
    useEffect(() => {
       const onBodyclick = (event) => {
            if(ref.current.contains(event.target))
                return;
            setOpen(false)
        }
        document.body.addEventListener('click', onBodyclick)

        return () => {
            document.body.removeEventListener('click', onBodyclick)
        }

    }, [])

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value){
            return null;
        }
        return(
            <div key={option.value} className="item" onClick={() => {  
            onSelectedChange(option)}}>
                {option.label}
            </div>
        )
    })

  
    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => {setOpen(!open)}} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text"> {selected.label} </div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                    {renderedOptions}
                    </div>
                </div>
                
                <div style={styles}>{`this is ${selected.value}`}</div>
            </div>
        </div>
    )
}

export default DropDown