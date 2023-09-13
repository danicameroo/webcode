import { useLocation } from 'react-router-dom';
import './WhyUs.css'
import { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";

const WhyUs = () => {
    const location = useLocation();
    const scrollOnLoadWhyUs = new URLSearchParams(location.search).get('WhyUs') === 'true';
    const whyUsRef = useRef(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const isInView = inView || false;

    useEffect(() => {
        if (scrollOnLoadWhyUs) {
        const scrollToWhyUsSection = () => {
            if (whyUsRef.current) {
            whyUsRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToWhyUsSection();
        }
    }, [scrollOnLoadWhyUs]);

    return(
        <div className={`containerWhyUs ${isInView ? 'active' : ''}`} ref={ref}>
            <div ref={whyUsRef}>
                <h2 className="titleWhyUs">¿QUE HACEMOS EN <span className="color">WEBCODE</span>?</h2>
                <p className="textWhyUs">Desarrollamos y disenamos paginas web, e-commerce y catalogos personalizados para aumentar la visibilidad y ventas de tu negocio</p>
            </div>
        </div>
    )
}

export default WhyUs