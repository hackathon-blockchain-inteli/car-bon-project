import React from 'react';
import styles from "./NavBar.module.scss";

const NavBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Logo}>
        <h1><span>Car</span>bon</h1>
      </div>
      <div className={styles.navMap}>
        <a href="/">Home</a>
        <a href="/exchange">Exchange Credits</a>
        <a href="/transparency">Transaction history</a>
        <a href="/cars">My Space</a>
        <a href="/faq">FAQ</a>
        {/* <a href="/faq">Transparency</a> */}
      </div>
      <div className={styles.buttonFocus}>
        <a href='/signup'><button className={styles.buttonn}>Be a part of <span>this</span></button></a>
      </div>
    </div>
  );
}

export default NavBar;