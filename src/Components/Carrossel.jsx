import React, { useRef, useEffect, useState } from 'react';
import "./Carrossel.css";

const Carrossel = ({ url, titulo, componente, tamanhoDoCard, classe, classNameTitulo, classNameContainer}) => {
  const [data, setData] = useState([]);
  const carrossel = useRef(null);
  const cardWidth = tamanhoDoCard; // Largura do cartão, ajuste conforme necessário

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;

  const handleClickEsquerdo = (e) => {
    e.preventDefault();
    const scrollAmount = cardWidth; // Adiciona algum espaço extra para margens, ajuste conforme necessário
    carrossel.current.scrollLeft -= scrollAmount;
  };

  const handleClickDireito = (e) => {
    e.preventDefault();
    const scrollAmount = cardWidth; // Adiciona algum espaço extra para margens, ajuste conforme necessário
    carrossel.current.scrollLeft += scrollAmount;
  };

  return (
    <div className={classe}>
      <h1 className={`titulo-topico ${classNameTitulo}`} data-aos="fade-down" data-aos-duration="800">{titulo}</h1>
      <div className={classNameContainer} >
        <button className='buttons-carrossel container-buttons-esquerda' onClick={handleClickEsquerdo} data-aos="fade-right" data-aos-duration="800">
          <img src="folhas.png" alt="Seta para direita" className='folhas-esquerda buttons' />
          <img src="seta.png" alt="Seta para esquerda" className='seta seta-esquerda' />
        </button>
        <div className='conteudo-carrossel' data-aos="fade-down" data-aos-duration="800" ref={carrossel}>
          {data.map((item) => {
            const { id, titulo, texto } = item;
            return React.cloneElement(componente, { key: id, titulo: titulo, descricao: texto });
          })}
        </div>
        <button className='buttons-carrossel  container-buttons-direita ' onClick={handleClickDireito} data-aos="fade-left" data-aos-duration="800">
          <img src="seta.png" alt="Seta para direita" className='seta seta-direita' />
          <img src="folhas.png" alt="Seta para direita" className='folhas-direita' />
        </button>
      </div>
    </div>
  );
};

export default Carrossel;
