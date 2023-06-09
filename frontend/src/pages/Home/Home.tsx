import React from 'react';
import styles from "./Home.module.scss";
import NavBar from '../../componentes/NavBar/NavBar';
import FootBar from '../../componentes/FootBar/FootBar';
import car from '../../assets/car.png';
import stplace from '../../assets/stplace.png';
import ndplace from '../../assets/ndplace.png';
import thplace from '../../assets/thplace.png';
import Preserve from '../../assets/Preserve.png';


const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.intro}>
          <div>
            <h1>Wanna compensate you carbon emission?</h1>
            <p>Buy/Generate Offset Carbon tokens through Car's registrations</p>
            <button>Get Started</button>
          </div>
          <div className={styles.divImg}>
            <img src={Preserve}></img>
          </div>
        </div>
        <div className={styles.benefits}>
          <div>
            <h2>Get OffSet Carbon</h2>
            <p>Monitor your car's COˆ2 emission and earn OffSet Carbon Tokens</p>
            <button>Get Start</button>
          </div>
          <div>
            <h2>All transations with BTG dol</h2>
            <p>Garanty the reliability, security and transparency of the BTG dol stablecoin</p>
            <button>Learn more</button>
          </div>
          <div>
            <h2>Compensate your carbon footprint</h2>
            <p>Buy OffSet Carbon Tokens with BTG dol</p>
            <button>Go to exchange</button>
          </div>
        </div>
        <div className={styles.infoCar}>
          <div>
            <img src={car}></img>
          </div>
          <div>
            <h2>Preserve our world.</h2>
            <h2>Minimize the carbon in the atmosphere.</h2>
            <h2>All through  your vehicle.</h2>
            <h2>And be rewarded: <span>Offset Carbon</span></h2>
          </div>
        </div>
        <div className={styles.ranking}>
          <div>
            <h1>Carbon compensation <span className={styles.rankingSpan}>Ranking</span></h1>
            <h2>Top companys who have purchased Offset Carbon</h2>
          </div>
          <div className={styles.rankingList}>
            <div>
              <div className={styles.ndPlace}><img src={ndplace}></img></div>
              <h2>2- XPTO</h2>
            </div>
            <div>
              <div className={styles.stPlace}><img src={stplace}></img></div>
              <h2>1- CompNY</h2>
            </div>
            <div>
              <div className={styles.stPlaces}><img src={thplace}></img></div>
              <h2>3- XIS</h2>
            </div>
          </div>
        </div>
      </div>
      <FootBar />
    </div>
  );
}

export default Home;