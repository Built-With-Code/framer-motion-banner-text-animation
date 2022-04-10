import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h3>
        <span>Robots</span> <span>Co</span>
      </h3>
      <div>Menu</div>
    </nav>
  );
};

export default Navbar;
