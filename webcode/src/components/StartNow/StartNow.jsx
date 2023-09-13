import { Link } from 'react-router-dom';
import imgEmpezar from '../../images/empezar.png'
import './StartNow.css'
import { useInView } from "react-intersection-observer";

const StartNow = ( ) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    const isInView = inView || false;

    return(
        <div className={`containerStartNow ${isInView ? 'active' : ''}`} ref={ref}>
            <div className='containerImgStartNow'>
                <img className='imgStartNow' src={imgEmpezar} alt="" />
            </div>
            <div className='containerTextStartNow'>
                <h2 className='titleStartNow'>SUMA TU <span className='color'>NEGOCIO</span> AL MUNDO ONLINE CON <span className='color'>NOSOTROS</span></h2>
                <Link to={'/form'}><button className='buttonStartNow'>Empezar</button></Link>
            </div>
        </div>
    )
} 

export default StartNow