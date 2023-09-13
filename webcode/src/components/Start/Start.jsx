import phoneStart from '../../images/phoneStart.png'
import { useInView } from "react-intersection-observer";
import './Start.css'
import { Link } from 'react-router-dom';

const Start = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    const isInView = inView || false;

    return(
        <div className={`Start ${isInView ? 'active' : ''}`} ref={ref}>
            <div className='StartContainerText'>
                <h2 className='TitleStart'>LLEVA TU <span className='color'>NEGOCIO</span> AL <span className='color'>SIGUIENTE</span> NIVEL</h2>
                <p className='TextStart'>Tener una pagina web puede aumentar hasta un 80% la visibilidad de tu negocio</p>
                <Link to={'/form'}><button className='buttonStart'>Empezar mi pagina web</button></Link>
            </div>
            <div>
                <img className='imgPhone' src={phoneStart} alt="" />
            </div>
        </div>
    )
}

export default Start