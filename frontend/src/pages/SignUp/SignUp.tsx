import React, { useState } from 'react';
import styles from './SignUp.module.scss';
import NavBar from '../../componentes/NavBar/NavBar';
import FootBar from '../../componentes/FootBar/FootBar';

const SignUp: React.FC = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div>
          <div className={styles.intro}>
            <h1>Welcome to <span>Car</span>bon!</h1>
            <p>Register to create your account and start exploring our exchange system</p>
          </div>
          <div className={styles.form}>
            <div className={styles.field}>
              <label>Email:</label>
              <input placeholder="Put your email"/>
            </div>
            <div className={styles.field}>
              <label>Password:</label>
              <input placeholder="Put your password"/>
            </div>
          </div>
          <div className={styles.typeAccount}>
            <p>Select the type of your account:</p>
            <div>
              <label><input type="radio" value="option1"checked={selectedOption === 'option1'} onChange={handleOptionChange}/>Legal person</label>
              <label><input type="radio" value="option2"checked={selectedOption === 'option2'} onChange={handleOptionChange}/>Natural person</label>
            </div>
          </div>
          <div className={styles.buttonReg}>
            <button>Register</button>
          </div>
        </div>
      </div>
      <FootBar />

    </div>
  );
}

export default SignUp;