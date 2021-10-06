import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blank1.module.css";
const Blank1 = () => {
  return <main id="mainContent">
    <div className="container">
      <div className="row justify-content-center mt-5 p-0">
      <div className={styles.center}>
        <div>
        <p>1/1</p>
        <p className={styles.topright}>
          time: 11:10
        </p>
        </div>
        
        <p><strong>Question</strong> Pick one of them</p>
        <div className={styles.centerp}>
          <button className={styles.button1}>A</button>
          <button className={styles.button1}>B</button>
        </div>
        <div className={styles.centerp}>
          <button className={styles.button1}>C</button>
          <button className={styles.button1}>D</button>
        </div>
        <div className={styles.rightconer}>
          <Link className="nav-item nav-link active" to="/">
          previous
          </Link>
          <Link className="nav-item nav-link active" to="Result">
          submit
          </Link>
          
        </div>
      </div>
      </div>
    </div>
  </main>
}
export default Blank1;
