import React from 'react';
import styles from "./Faq.module.scss";
import NavBar from '../../componentes/NavBar/NavBar';
import FootBar from '../../componentes/FootBar/FootBar';


const Faq: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div><h1>All about BTG dol</h1></div>
        <div className={styles.cardlist} >
            <h2>What is a <span>stablecoin?</span></h2>
            <p>Stablecoins são, em geral, criptomoedas projetadas para manter um valor estável em relação a uma determinada moeda fiduciária, como o dólar americano. Ao contrário de outras criptomoedas que são conhecidas por sua volatilidade, as stablecoins são projetadas para serem estáveis e previsíveis em seu valor de mercado. Cada token da stablecoin representa uma unidade dessa moeda. Além disso, as stablecoins também podem ser usadas para transferências de valor rápidas e baratas, sem as taxas e limitações associadas às transferências tradicionais de moedas fiduciárias.</p>
        </div>
        <div className={styles.cardlist} >
            <h2><span>What</span> is BTG dol?</h2>
            <p>BTG dol é uma Stablecoin criada pela Mynt, do BTG Pactual, e é lastreada pelo dólar americano. Ou seja, um token de BTG dol é equivalente a 1 dólar americano, sempre.</p>
        </div>
        <div className={styles.cardlist} >
            <h2><span>Why</span> use BTG dol?</h2>
            <p>BTG dol une a estabilidade e previsão do valor do dólar, com a facilidade de entrar e sair de forma rápida do mercado crypo para o mercado tradicional e, tudo isso, com as muitas camadas de segurança e confiabilidade garantidas pelo banco - algo pouco comum no mercado de crypto.</p>
        </div>
        <div className={styles.cardlist} >
            <h2><span>How</span> to claim your BTG dol?</h2>
        </div>
        
      </div>
      <FootBar />
    </div>
  );
}

export default Faq;