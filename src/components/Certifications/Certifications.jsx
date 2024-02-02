import React from 'react'
import styles from "./certifications.module.css";
import { getImageUrl } from "../../utils";

const Certifications = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/library.png")} alt="Cursor icon" style={{width:"50px",height:"50px"}}/>
            <div className={styles.aboutItemText}>
              <h3>Java Programming</h3>
              <p>
              UDEMY
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/library.png")} alt="Server icon" style={{width:"50px",height:"50px"}}/>
            <div className={styles.aboutItemText}>
              <h3> Full Stack Development</h3>
              <p>
              UDEMY
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/library.png")} alt="UI icon" style={{width:"50px",height:"50px"}}/>
            <div className={styles.aboutItemText}>
              <h3>Java, C Training </h3>
              <p>
              SPOKEN TUTORIAL
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Certifications