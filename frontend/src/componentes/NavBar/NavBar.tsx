import React from 'react';
import styles from "./NavBar.module.scss";

const NavBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Logo}>
        <h1><span>Car</span>bon</h1>
      </div>
      <div className={styles.navMap}>
        <p>Home</p>
        <p>Exchange Credits</p>
        <p>Transaction history</p>
        <p>Cars</p>
        <p>FAQ</p>
      </div>
      <div className={styles.buttonFocus}>
        <p>Transparency</p>
        <button>Be a part of <span>this</span></button>
      </div>
    </div>
  );
}

export default NavBar;