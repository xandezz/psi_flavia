import React, { useRef, useState, useEffect } from 'react';
import "./Carrossel.css";

const Carrossel = ({
  data,
  titulo,
  componente,
  classe,
  classNameTitulo,
  classNameContainer,
  classNameConteudo,
  classNameFolhasDireita,
  classNameFolhasEsquerda,
}) => {
  const carrossel = useRef(null);
  const [indiceAtual, setIndiceAtual] = useState(0)
  const handleScroll = () => {
    const card = carrossel.current.children[0];
    const cardWidth = card.offsetWidth;
    const scrollAmount = cardWidth + 20;
    const newIndice = Math.round(carrossel.current.scrollLeft / scrollAmount);
    setIndiceAtual(newIndice);
  };

  useEffect(() => {
    carrossel.current.addEventListener('scroll', handleScroll);
    return () => {
      carrossel.current.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleClickEsquerdo = (e) => {
    e.preventDefault();
    const card = carrossel.current.children[0];
    const cardWidth = card.offsetWidth;
    const scrollAmount = cardWidth;
    carrossel.current.scrollLeft -= scrollAmount + 20;
    setIndiceAtual((prevIndice) => Math.max(prevIndice - 1, 0));
  };

  const handleClickDireito = (e) => {
    e.preventDefault();
    const card = carrossel.current.children[0];
    const cardWidth = card.offsetWidth;
    const scrollAmount = cardWidth;
    carrossel.current.scrollLeft += scrollAmount + 20;
    setIndiceAtual((prevIndice) =>
      Math.min(prevIndice + 1, data.length - 1)
    );
  };

  if (!data || !data.length) return null;

  return (
    <div className={classe}>
      <p
        className={`titulo-topico ${classNameTitulo}`}
        data-aos="fade-down"
        data-aos-duration="800"
      >
        {titulo}
      </p>
      <div className={classNameContainer}>
        <button
          className="buttons-carrossel container-buttons-esquerda"
          onClick={handleClickEsquerdo}
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <img
            src="folhas.png"
            alt="Seta para direita"
            className={classNameFolhasEsquerda}
          />
          <img
            src="seta.png"
            alt="Seta para esquerda"
            className="seta seta-esquerda"
          />
        </button>
        <div
          className={`conteudo-carrossel ${classNameConteudo}`}
          data-aos="fade-down"
          data-aos-duration="800"
          ref={carrossel}
        >
          {data.map((item) => {
            const { id, titulo, texto } = item;
            return React.cloneElement(componente, {
              key: id,
              titulo: titulo,
              descricao: texto,
            });
          })}
        </div>
        <button
          className="buttons-carrossel  container-buttons-direita "
          onClick={handleClickDireito}
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <img
            src="seta.png"
            alt="Seta para direita"
            className="seta seta-direita"
          />
          <img
            src="folhas.png"
            alt="Seta para direita"
            className={classNameFolhasDireita}
          />
        </button>
      </div>
      <div className="bolinhas-indicadoras">
        {data.map((_, index) => (
          <div
            key={index}
            className={`bolinha-indicadora ${index === indiceAtual ? 'ativa' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carrossel;