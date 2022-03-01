import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {

    const [errors, setErrors] = useState({name : null, email : null})

    const [contact,  setContact] = useState({
        name:'',
        phone:'',
        email:'',
        status: false
    })

    const validateName = (value, err) => {
        err = ({...err, name : undefined})
        if(value.length > 100) err = ({...err, name : "El nombre es demasiado largo"})
        if(value.length < 7) err = ({...err, name : "Por favor ingrese un Nombre y Apellido válidos"})
        if (typeof value !== "undefined") {
            if (!value.match(/^[a-zA-Z ]+$/)) {
                err = ({...err, name : "El nombre solo debe contener letras y espacios"})
            }
        }
        if(value.length === 0) err = ({...err, name : "Por favor ingrese un nombre"})
        return err
    }
    
    const validateEmail = (value, err) => {
        err = ({...err, email : undefined})
        if(value.length > 100) err = ({...err, email : "El email es demasiado largo"})
        if(value.length < 7) err = ({...err, email : "Por favor ingrese una dirección de email válida"})
        if (typeof value !== "undefined") {
            if (!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                err = ({...err, email : "El email debe tener un formato válido"})
            }
        }
        if(value.length === 0) err = ({...err, email : "Por favor ingrese una dirección de email"})
        return err
    }

    const handleChange = (e) => {
        const field = e.target.id
        const value = e.target.value
        let err = {...errors}

        if(field === "name") err = validateName(value, err)
        if(field === "email") err = validateEmail(value, err)

        setErrors(err)
        
        setContact({...contact, [field] : value })
    }
    
    const submit = (e) => {
        e.preventDefault()
        let err = {...errors}

        err = validateName(e.target.elements.name.value, err)
        err = validateEmail(e.target.elements.email.value, err)
        
        if(!(typeof(err.name) !== "undefined" ||
        typeof(err.email) !== "undefined" ||
        typeof(err.phone) !== "undefined")) message(e)
        setErrors(err)
    }

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const message = (e) => {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
            })
        });
        e.target.reset()
    }

    const style = {
        'backgroundColor' : 'rgb(220, 215, 180)',
    }

  return (
    <div className="w-100 p-lg-4" style={style} id="contacto">
        <div className="container">
            <div className="row p-2 py-4 my-4">
                <div className="col">
                    <h5 style={{'fontWeight' : '600'}}>Contactanos</h5>
                </div>
                <div>
                    <div>Mail: <a href="mailto:duo.austral.barcelona@gmail.com" className="text-decoration-none">duo.austral.barcelona@gmail.com</a></div>
                    <div>Móvil / Whatsapp: <a href="https://wa.me/+34658277392" target="_blank" rel="noreferrer" className="text-decoration-none">+34 658 27 73 92</a></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 col-lg-3 d-lg-block"></div>
                <div className="col-md-8 col-lg-6">
                    <form className="form" onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className={"form-control" + (errors.name ? " is-invalid" : "")} onChange={handleChange} id="name" placeholder="Nombre" name="from_name" />
                            { errors.name && <div className="invalid-feedback">{ errors.name }</div> }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className={"form-control" + (errors.email ? " is-invalid" : "")} onChange={handleChange} id="email" placeholder="Email..." name="from_email" />
                            { errors.email && <div className="invalid-feedback">{ errors.email }</div> }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="message" rows="3" name="message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Enviar</button>
                    </form>
                </div>
                <div className="col-md-2 col-lg-3 d-lg-block"></div>
            </div>
        </div>
    </div>
  )
}

export default Contact