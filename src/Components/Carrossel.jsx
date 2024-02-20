import React, { useRef, useEffect, useState } from 'react';
import "./Carrossel.css";

const Carrossel = ({ data, titulo, componente, classe, classNameTitulo, classNameContainer, classNameConteudo, classNameFolhasDireita, classNameFolhasEsquerda }) => {
  const carrossel = useRef(null);

  const handleClickEsquerdo = (e) => {
    e.preventDefault();
    const card = carrossel.current.children[0];
    const cardWidth = card.offsetWidth;
    const scrollAmount = cardWidth;
    carrossel.current.scrollLeft -= scrollAmount + 20;
  };

  const handleClickDireito = (e) => {
    e.preventDefault();
    const card = carrossel.current.children[0];
    const cardWidth = card.offsetWidth;
    const scrollAmount = cardWidth;
    carrossel.current.scrollLeft += scrollAmount + 20;
  };
  if (!data || !data.length) return null;

  return (
    <div className={classe}>
      <h1 className={`titulo-topico ${classNameTitulo}`} data-aos="fade-down" data-aos-duration="800">{titulo}</h1>
      <div className={classNameContainer} >
        <button className='buttons-carrossel container-buttons-esquerda' onClick={handleClickEsquerdo} data-aos="fade-right" data-aos-duration="800">
          <img src="folhas.png" alt="Seta para direita" className={classNameFolhasEsquerda} />
          <img src="seta.png" alt="Seta para esquerda" className='seta seta-esquerda' />
        </button>
        <div className={`conteudo-carrossel ${classNameConteudo}`} data-aos="fade-down" data-aos-duration="800" ref={carrossel}>
          {data.map((item) => {
            const { id, titulo, texto } = item;
            return React.cloneElement(componente, { key: id, titulo: titulo, descricao: texto });
          })}
        </div>
        <button className='buttons-carrossel  container-buttons-direita ' onClick={handleClickDireito} data-aos="fade-left" data-aos-duration="800">
          <img src="seta.png" alt="Seta para direita" className='seta seta-direita' />
          <img src="folhas.png" alt="Seta para direita" className={classNameFolhasDireita} />
        </button>
      </div>
    </div>
  );
};

export default Carrossel;
