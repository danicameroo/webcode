import lupa from '../../images/lupaBenefits.svg'
import escudo from '../../images/escudoBenefits.svg'
import ingreso from '../../images/ingresoBenefits.svg'
import './Benefits.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useInView } from "react-intersection-observer";

const Benefits = () => {
  const location = useLocation();
  const scrollOnLoadBenefits = new URLSearchParams(location.search).get('Benefits') === 'true';
  const benefitRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
});

const isInView = inView || false;

  useEffect(() => {
    if (scrollOnLoadBenefits) {
      const scrollToBenefitSection = () => {
        if (benefitRef.current) {
          benefitRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
      scrollToBenefitSection();
    }
  }, [scrollOnLoadBenefits]);

    return(
        <div className={`containerAllBenefits ${isInView ? 'active' : ''}`} ref={ref}>
            <div className='containerBenefits' ref={benefitRef}> 
                <img className='imgBenefit' src={lupa} alt="" />
                <h2 className='titleBenefits'>Mayor visibilidad y alcance</h2>
                <p className='textBenefits'>Aumenta hasta un 80% la visibilidad de tu negocio</p>
            </div>
            <div className='containerBenefits'> 
                <img className='imgBenefit' src={escudo} alt="" />
                <h2 className='titleBenefits'>Mayor visibilidad y alcance</h2>
                <p className='textBenefits'>Aumenta hasta un 80% la visibilidad de tu negocio</p>
            </div>
            <div className='containerBenefits'> 
                <img className='imgBenefit' src={ingreso} alt="" />
                <h2 className='titleBenefits'>Mayor visibilidad y alcance</h2>
                <p className='textBenefits'>Aumenta hasta un 80% la visibilidad de tu negocio</p>
            </div>
        </div>
    )
}

export default Benefits