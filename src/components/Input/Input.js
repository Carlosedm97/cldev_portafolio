import './Input.css';

const Input = (props) => {

    const { title, placeholder, required, value } = props; 

    return <div className='input__container'>
        <label className='input__label'>{ title }</label>
        <input className='input__input'
            placeholder={ placeholder }
            required={ required }
            value={ value }
        />
    </div>
}

export default Input;