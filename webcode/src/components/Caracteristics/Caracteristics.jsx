import { useLocation } from 'react-router-dom';
import check from '../../images/check.svg';
import './Caracteristics.css';
import { useEffect, useRef, useState } from 'react';
import { useInView } from "react-intersection-observer";

const Caracteristics = () => {
  const caracteristicas = ["Diseno personalizado", "Responsive", "Plataformas dinamicas", "Posicionamiento", "Fortalecer la marca", "Aumento de ventas", "Accesibilidad 24/7", "Visibilidad"];
  const location = useLocation();
  const scrollOnLoadCaract = new URLSearchParams(location.search).get('Caracteristics') === 'true';
  const caractRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (scrollOnLoadCaract) {
      const scrollToCaractSection = () => {
        if (caractRef.current) {
          caractRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
      scrollToCaractSection();
    }
  }, [scrollOnLoadCaract]);

  return (
    <div ref={caractRef}>
      <h3 className='titleCaract'>CARACTERISTICAS</h3>
      <div className={`conteinerListCaract ${inView ? 'active' : ''}`} ref={ref}>
        {caracteristicas.map((item, index) => (
          <div className="listCaract" key={index}>
            <img className='imgCheck' src={check} alt="" />
            <p className='textCaract'>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caracteristics;