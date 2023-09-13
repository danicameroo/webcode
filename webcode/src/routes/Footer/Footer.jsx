import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className='Footer'>
            <div className='textMapFooter'>
                <Link className='linkNav' to="/?Benefits=true"><p className='textTextMapFooter'>Beneficios</p></Link>
                <Link className='linkNav' to="/?WhyUs=true"><p className='textTextMapFooter'>¿Quienes somos?</p></Link>
                <Link className='linkNav' to="/?Caracteristics=true"><p className='textTextMapFooter'>Características</p></Link>
                <Link  className='linkNav' to="/?FAQ=true&index=5"><p className='textTextMapFooter'>Preguntas frecuentes</p></Link>
            </div>
            <div className='textMapFooter'>
                <Link className='linkNav' to="/?FAQ=true&index=0"><p className='textTextMapFooter'>Sobre el diseño</p></Link>
                <Link className='linkNav' to={`/?FAQ=true&index=1`}><p className='textTextMapFooter'>Sobre el responsive</p></Link>
                <Link className='linkNav' to={`/?FAQ=true&index=2`}><p className='textTextMapFooter'>Como trabajamos</p></Link>
                <Link className='linkNav' to={`/?FAQ=true&index=4`}><p className='textTextMapFooter'>Planes</p></Link>
            </div>
            <div className='textMapFooter'>
                <Link  className='linkNav' to="https://www.instagram.com/webcode.ve/" target="_blank"><p className='textTextMapFooter'>Instagram</p></Link>
                <Link to="tel:+584244981397" className='linkNav'><p className='textTextMapFooter'>Contacto</p></Link>
                <Link to="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQzCVMpBnQjPKqxQwXsSRjzLzWgBKkJQTKCpsbLwqTQVvSZNnWjftGnnklwtrBCKqHVWg" className='linkNav' target="_blank"><p className='textTextMapFooter'>Correo electronico</p></Link>
                <Link to="/form" className='linkNav'><p className='textTextMapFooter'>Empezar</p></Link>
            </div>
        </div>
    )
}

export default Footer