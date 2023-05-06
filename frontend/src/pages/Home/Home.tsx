import React from 'react';
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div>
          <h1>Wanna compensate you carbon emission?</h1>
          <p>Buy/Generate Offset Carbon tokens through Car's registrations</p>
          <button>Get Started</button>
        </div>
        <div>
          <img></img>
        </div>
      </div>
      <div className={styles.benefits}>
        <div>
          <h2>Get OffSet Carbon</h2>
          <p>Monitor your car's COˆ2 emission and earn OffSet Carbon Tokens</p>
        </div>
        <div>
          <h2>All transations with BTG dol</h2>
          <p>Garanty the reliability, security and transparency of the BTG dol stablecoin</p>
        </div>
        <div>
          <h2>Compensate your company's carbon footprint</h2>
          <p>Buy OffSet Carbon Tokens with BTG dol</p>
        </div>
      </div>
    </div>
    
  );
}

export default Home;