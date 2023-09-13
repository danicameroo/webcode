import { useEffect, useRef, useState } from "react";
import arrow from '../../images/arrow.png'
import "./FAQ.css";
import { useLocation } from "react-router-dom";

const FAQ = () => {
  const Preguntas = [
    {
      title: "¿Hacen el diseño web?",
      res: "Respuesta 1",
      index: 0
    },
    {
      title: "¿Qué es un diseño responsive?",
      res: "Respuesta 2",
      index: 1
    },
    {
      title: "¿Cómo hago si hay cambios al estar el sitio web listo?",
      res: "Respuesta 3",
      index: 2
    },
    {
      title: "¿Se encargan del posicionamiento?",
      res: "Respuesta 4",
      index: 3
    },
    {
      title: "¿Cómo es su trabajo?",
      res: "Respuesta 5",
      index: 4
    },
  ];

  const location = useLocation();
  const faqRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [shouldUpdateUrl, setShouldUpdateUrl] = useState(true);

  const toggleOpen = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const index = parseInt(urlParams.get('index'));
    if (!isNaN(index)) {
      setOpenIndex(index);
      if (faqRef.current) {
        faqRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.search]);

  useEffect(() => {
    if (shouldUpdateUrl && openIndex !== null) {
      const urlParams = new URLSearchParams(location.search);
      urlParams.set('index', openIndex.toString());
      const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
      window.history.replaceState(null, '', newUrl);
    }
  }, [openIndex, shouldUpdateUrl, location.search]);

  const handleToggleOpen = (index) => {
    setShouldUpdateUrl(false);
    toggleOpen(index);
  };

  return (
    <div className="containerFAQ" ref={faqRef}>
      <h3 className="titleFAQ" >Preguntas frecuentes</h3>
      {Preguntas.map((item, index) => (
        <div
          key={index}
          className={`selectPackages ${openIndex === index ? "openPack" : ""}`}
          onClick={() => handleToggleOpen(index)}
          style={{
            borderTopLeftRadius: index === 0 ? "15px" : "0",
            borderTopRightRadius: index === 0 ? "15px" : "0",
            borderBottomLeftRadius: index === Preguntas.length - 1 ? "15px" : "0",
            borderBottomRightRadius: index === Preguntas.length - 1 ? "15px" : "0",
          }}
        >
          <div className="selectedOptionPackages">
            <p className="titleSelect">{item.title}</p>
            <img
              className={`arrowFAQ ${openIndex === index ? "rotateArrow" : ""}`}
              src={arrow}
              alt=""
            />
          </div>
          {openIndex === index && (
            <div className="textSelect">
              <p className="textSelectFAQ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum assumenda maxime cum quod? Incidunt quam quod cum odit alias quia, sint ipsam ab culpa saepe a deserunt aperiam deleniti?
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;