import { useState, useRef } from 'react';
import './Contact.css';
import Input from '../Input/Input';
import SendButton from '../SendButton/SendButton';

const Contact = () => {

    // const input1Ref = useRef(null);
    // const input2Ref = useRef(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault()
        // console.log(input1Ref.current.checkValidity());
        // console.log(input2Ref.current.checkValidity());
        const dataToSend = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        console.log('Enviando datos...', dataToSend)
    }

    return <section className='contact'>
        <h2 className='contact__title'><span className='quotes'>{'< '}</span>Contacto<span className='quotes'>{' >'}</span></h2>
        <form className='contact__form' onSubmit={ handleFormSubmit }>
            <Input 
            title='Nombre'
            placeholder='Ingrese su nombre'
            required
            type='text'
            setValue={ setName }
            // ref={ input1Ref }
            />
            <Input 
            title='Correo'
            placeholder='usuario@proveedor.com'
            required
            type='email'
            setValue={ setEmail }
            // ref={ input2Ref }
            />
            <Input 
            title='Asunto'
            placeholder='Ingrese el asunto'
            required
            type='text'
            setValue={ setSubject }
            />
            <Input 
            title='Mensaje'
            placeholder='Ingrese el mensaje'
            required
            type='text'
            setValue={ setMessage }
            />
            <SendButton texto='Enviar'/>
        </form>
    </section>
};

export default Contact;