import React from "react";
import { options } from "toastr";

export default (props) =>{
    
    const options = props.lista.map( (option,index) => {
        return(
            <option key={index} value={option.value}>{option.label}</option>
        )
    })
    
    return(
        <select {...props}>
            {options}
        </select>
    )
}