import { useState } from 'react';
import './Input.css';

const Input = (props) => {

    const [focused, setFocused] = useState(true)

    const handleInputFocus = () => {
        setFocused(true)
    }

    const handleInputBlur = () =>{
        setFocused(false)
    }

    const { title, placeholder, required, value } = props; 

    return <div className='input__container'>
        <label className='input__label'>{ title }</label>
        <input className={ focused ? 'input__input' : 'input__input invalid'}
            placeholder={ placeholder }
            required={ required }
            onFocus={ handleInputFocus }
            onBlur={ handleInputBlur }
        />
    </div>
}

export default Input;