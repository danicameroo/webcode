import LogoNav from '../../images/logo.png'
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {    
    
    return(
        <div className='MenuNav'>
            <Link className='linkNav' to='/'><img src={LogoNav} className='imgNav' alt='' /></Link>
            <div>
                <ul className='categoriesNav' >
                    <Link className='linkNav' to='/?Benefits=true'><li className='listaNav'>Beneficios</li></Link>
                    <Link className='linkNav' to='/?WhyUs=true'><li className='listaNav'>¿Quienes somos?</li></Link>
                    <Link className='linkNav' to='/?Caracteristics=true'><li className='listaNav'>Característica</li></Link>
                    <Link className='linkNav' to='/?FAQ=true&index=5'><li className='listaNav'>FAQ`S</li></Link>
                    <Link className='linkNav' to='/form'><li className='listaNav'>Empezar</li></Link>
                </ul>
            </div>
        </div>
    );

};

export default NavBar