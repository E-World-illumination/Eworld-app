import React from "react";
import asset1 from "../../assets/asset1.png"; // Replace with actual path
import asset2 from "../../assets/asset2.png";
import asset3 from "../../assets/asset3.png"; // QR code in the center
import asset4 from "../../assets/asset4.png";
import asset5 from "../../assets/asset5.png";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.menuItem}>
        <img src={asset1} alt="Home" className={styles.icon} />
        <span className={styles.label}>HOME</span>
      </div>
      <div className={styles.menuItem}>
        <img src={asset2} alt="Map" className={styles.icon} />
        <span className={styles.label}>MAP</span>
      </div>
      <div className={styles.qrWrapper}>
        <img src={asset3} alt="QR Code" className={styles.qrIcon} />
      </div>
      <div className={styles.menuItem}>
        <img src={asset4} alt="Stamp" className={styles.icon} />
        <span className={styles.label}>STAMP</span>
      </div>
      <div className={styles.menuItem}>
        <img src={asset5} alt="My" className={styles.icon} />
        <span className={styles.label}>MY</span>
      </div>
    </footer>
  );
};

export default Footer;
