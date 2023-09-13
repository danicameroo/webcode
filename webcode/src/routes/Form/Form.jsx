import { Link } from 'react-router-dom'
import './Form.css'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [formData, setFormData] = useState({
        negocio: '',
        nombre: '',
        apellido: '',
        email: '',
        description: '',
        nicho: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleOptionsClick = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const toastId = 'form-submission-toast';
    
        const templateParams = {
          negocio: formData.negocio,
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          description: formData.description,
          nicho: formData.nicho,
          option: selectedOption.toString()
        };

        // Envía el formulario usando EmailJS
        emailjs.send('service_vw4zizt', 'template_vm44lie', templateParams, 'EEhrbNotEY4A3jsIG')
        .then((result) => {
            console.log(result.text);
            toast.success('Form submitted successfully!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000, // 3 seconds
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            toastId,
            transition: Slide
            });
        }, (error) => {
            console.log(error.text);
            toast.error('Failed to submit the form. Please try again later.', {
            position: toast.POSITION.TOP_RIGHT,
            toastId
            });
        });
    };

    console.log(selectedOption)
    return(
        <div>
            <div className="toast-container"><ToastContainer limit={2}/></div>
            <div className='textContainerForm'>
                <h2 className='titleForm'>CUENTANOS SOBRE TU NEGOCIO</h2>
                <div className='buttonContainerForm'>
                    <Link to={'https://api.whatsapp.com/send/?phone=584244981397&text&type=phone_number&app_absent=0'} target="_blank"><button className='buttonForm'>Ir al WhatsApp</button></Link>
                    <Link to="tel:+584244981397"><button className='buttonForm'>Llamar</button></Link>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='containerForm'>
                <input type="text" name='negocio' placeholder="Nombre del negocio" className='inputForm' onChange={handleChange} required/>
                <input type="text" name='nombre' placeholder="Nombre" className='inputForm' onChange={handleChange} required/>
                <input type="text" name='apellido' placeholder="Apellido" className='inputForm' onChange={handleChange} required/>
                <div className='containerFlexForm'>
                    <input type="text" name='description' placeholder="Caracteristicas de la empresa" className='inputFormDesc' onChange={handleChange} required/>
                    <div className='containerBoxForm'>
                        <input type="email" name='email'  placeholder="Correo electronico" className='inputFormtwo' onChange={handleChange} required/>
                        <input type="text" name='nicho'  placeholder="Nicho de la empresa" className='inputFormtwo' onChange={handleChange} required/>
                        <select className='selectForm'  onChange={handleOptionsClick}  name="option" required>
                            <option value="" hidden>Plan</option>
                            <option value="Basico">Basico</option>
                            <option value="Premium" >Premium</option>
                        </select>
                    </div>
                </div>
                <input type="submit" className='buttonFormEnviar'/>
            </form>
        </div>
    )
}

export default Form