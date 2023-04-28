import './Contact.css';
import Input from '../Input/Input';

const Contact = () => {
    return <section className='contact'>
        <h2 className='contact__title'><span className='quotes'>{'< '}</span>Contacto<span className='quotes'>{' >'}</span></h2>
        <form className='contact__form'>
            <Input 
            title='Nombre'
            placeholder='Ingrese su nombre'
            required
            />
            <Input 
            title='Correo'
            placeholder='Ingrese su correo'
            required
            />
            <Input 
            title='Asunto'
            placeholder='Ingrese el asunto'
            required
            />
            <Input 
            title='Mensaje'
            placeholder='Ingrese el mensaje'
            required
            />
        </form>
    </section>
};

export default Contact;