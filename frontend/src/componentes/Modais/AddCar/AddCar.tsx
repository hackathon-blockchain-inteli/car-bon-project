import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

import AddCarCtx from '../../../contexts/AddCar-ctx.tsx';

import styles from "./AddCar.module.scss";

const AddCar = () => {
  const modalCtx = useContext(AddCarCtx);

  return (
    <AnimatePresence>
      {modalCtx.showModal && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            onClick={() => modalCtx.showModalHandler()}
            className={styles.modalBackdrop}
          ></motion.div>
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className={styles.modalContentWrapper}
          >
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              className={styles.modalContent}
            >
              <div className={styles.modalWrapper}>
                <header className={styles.header}>
                  <h1>Add Car</h1>
                  <GrClose  className={styles.closeButton} onClick={modalCtx.showModalHandler} size={26} />
                </header>
                <div className={styles.AddWrapper}>
                  <div className={styles.form}>
                    <div className={styles.field}>
                      <label>Identifier:</label>
                      <input placeholder="Put your identifier"/>
                    </div>
                    <div className={styles.field}>
                      <label>Contract address:</label>
                      <input placeholder="Put the contract address"/>
                    </div>
                  </div>
                </div>
                <div className={styles.submit}>
                  <button>Add Car</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddCar;
