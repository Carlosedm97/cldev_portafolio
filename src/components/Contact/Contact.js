import './Contact.css';
import { useForm } from '../../hooks/useForm';
import SendButton from '../SendButton/SendButton';

const initialForm = {};

const validationsForm = (form) =>{}

const Contact = () => {

    const {form,
            errors, 
            loading, 
            response,
            HandleInputBlur,
            HandleInputChange,
            HandleInputSubmit
        } = useForm(initialForm, validationsForm);

    return <section className='contact'>
        <h2 className='contact__title'><span className='quotes'>{'< '}</span>Contacto<span className='quotes'>{' >'}</span></h2>
        <form className='contact__form' onSubmit={HandleInputSubmit}>
            <input
                className='contact__input'
                type='text' 
                name='name' 
                placeholder='Ingresa tu nombre' 
                onChange={HandleInputChange}
                value={form.name}
                required 
                onBlur={HandleInputBlur} />

            <input
                className='contact__input'
                type='email' 
                name='email' 
                placeholder='Ingresa tu email' 
                onChange={HandleInputChange}
                value={form.email}
                required 
                onBlur={HandleInputBlur} />

            <input
                className='contact__input'
                type='text' 
                name='subject' 
                placeholder='Ingresa el asunto' 
                onChange={HandleInputChange}
                value={form.subject}
                required 
                onBlur={HandleInputBlur} />

            <textarea
                className='contact__input'
                name='message'
                cols='50'
                rows='5'
                placeholder='Ingrese un mensaje'
                onChange={HandleInputChange}
                value={form.message}
                required 
                onBlur={HandleInputBlur}
            ></textarea>

            <SendButton texto='Enviar'/>
        </form>
    </section>
};

export default Contact;