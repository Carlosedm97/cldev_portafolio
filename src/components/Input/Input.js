import { useState } from 'react';
import './Input.css';

const Input = (props) => {

    const [focused, setFocused] = useState(true);

    const handleInputFocus = (event) => {
        setFocused(true)
    }

    const handleInputBlur = (event) => {
        setFocused(false)
    }

    const handleInputChange = (event) => {
        props.setValue(event.target.value)
    }

    const { title, placeholder, type, required, value } = props; 

    return <div className='input__container'>
        <label className='input__label'>{ title }</label>
        <input className={ focused ? 'input__input' : 'input__input invalid'}
            placeholder={ placeholder }
            type={ type }
            required={ required }
            onFocus={ handleInputFocus }
            onBlur={ handleInputBlur }
            onChange={ handleInputChange }
            value={ value }
        />
    </div>
}

export default Input;