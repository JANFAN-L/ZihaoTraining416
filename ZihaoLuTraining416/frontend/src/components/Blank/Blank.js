import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blank.module.css";
const Blank = () => {
  return <main id="mainContent">
    <div className="container">
      <div className={styles.center}>
        <h1>Quiz:sample quiz</h1>
        <br></br>
        <p><strong>Discribtion</strong>:sample quiz</p>
        <p><strong>Question Number</strong>:1</p>
        <p><strong>Time Limit</strong>:12:00</p>
        <div className={styles.rightconer}>
        <Link className="nav-item nav-link active" to="Question">
          <button className={styles.button2}>start</button>
          </Link>
        </div>
      </div>
    </div>
  </main>
}
export default Blank;
