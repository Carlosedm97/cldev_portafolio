import React from 'react';
import './Contact.css';
import { useForm } from '../../hooks/useForm';
import SendButton from '../SendButton/SendButton';
import { LoaderForm } from '../Loader/LoaderForm';
import { Confirmation } from '../Confirmation/Confirmation';

const initialForm = {
    name:'',
    email:'',
    subject:'',
    message:''
};

const validationsForm = (form) =>{
    const errors = {};

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexMessage = /^.{1,255}$/;

    if (!form.name.trim()){
        errors.name = '* El campo nombre es requerido.';
    } else if (!regexName.test(form.name.trim())) {
        errors.name = '* El campo nombre no es valido.';
    }

    if (!form.email.trim()){
        errors.email = '* El campo email es requerido.';
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = '* El campo email no es valido.';
    }

    if (!form.subject.trim()){
        errors.subject = '* El campo asunto es requerido.';
    }

    if (!form.message.trim()){
        errors.message = '* El campo mensaje es requerido.';
    } else if (!regexMessage.test(form.message.trim())) {
        errors.message = '* El campo mensaje no debe exceder los 255 caracteres.';
    }

    return errors;
}

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
            <div className='input__container'>
                <input
                    className='contact__input'
                    type='text' 
                    name='name' 
                    placeholder='Ingresa tu nombre' 
                    onChange={HandleInputChange}
                    value={form.name}
                    required 
                    onBlur={HandleInputBlur} />

                { errors.name && <span className='input__invalid'>{ errors.name }</span>}
            </div>

            <div className='input__container'>
                <input
                    className='contact__input'
                    type='email' 
                    name='email' 
                    placeholder='Ingresa tu email' 
                    onChange={HandleInputChange}
                    value={form.email}
                    required 
                    onBlur={HandleInputBlur} />

                { errors.email && <span className='input__invalid'>{ errors.email }</span>}
            </div>

            <div className='input__container'>
                <input
                    className='contact__input'
                    type='text' 
                    name='subject' 
                    placeholder='Ingresa el asunto' 
                    onChange={HandleInputChange}
                    value={form.subject}
                    required 
                    onBlur={HandleInputBlur} />

                { errors.subject && <span className='input__invalid'>{ errors.subject }</span>}
            </div>

            <div className='input__container'>
                <textarea
                    className='contact__input'
                    name='message'
                    cols='50'
                    rows='2'
                    placeholder='Ingrese un mensaje'
                    onChange={HandleInputChange}
                    value={form.message}
                    required 
                    onBlur={HandleInputBlur}
                ></textarea>

                { errors.message && <span className='input__invalid'>{ errors.message }</span>}
            </div>

            { loading && <LoaderForm /> }
            { response && <Confirmation /> }

            <SendButton texto='Enviar' onClick={ HandleInputSubmit }/>
        </form>
    </section>
};

export default Contact;