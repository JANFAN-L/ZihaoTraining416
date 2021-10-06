import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blank2.module.css";
const Blank2 = () => {
  return <main id="mainContent">
    <div className="container">
      <div className="row justify-content-center mt-5 p-0">
      <div className={styles.center}>
        <div>
        <h2>Score:1/1</h2>
        <p className={styles.topright}>
          time used: 00:02
        </p>
        </div>
        
        
        <div className={styles.rightconer}>
          <Link className="nav-item nav-link active" to="Question">
          previous
          </Link>
          <Link className="nav-item nav-link active" to="/">
          back
          </Link>
          
        </div>
      </div>
      </div>
    </div>
  </main>
}
export default Blank2;
