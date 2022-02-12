import React, {useState} from "react";
import PropTypes from 'prop-types';


export const AddCategory = ({setCategory}) => {

    const [inputValue, serInputValue] = useState('');
    const handleInputChange = (e) => {
        serInputValue(e.target.value);
    }
    const handleSudmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategory(cats =>[inputValue,...cats]);
            serInputValue('');
        }
    }

    return (
            <form onSubmit={handleSudmit}>
                <input
                    type={"text"}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
    )
    AddCategory.propTypes ={
        setCategory:PropTypes.func.isRequired
    }
}