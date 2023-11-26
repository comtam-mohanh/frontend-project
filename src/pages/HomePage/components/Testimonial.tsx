import styles from "./Testimonial.module.css"
import Reviewer from "../../../assets/reviewer.png"
import { Chart } from "./Chart"
import Star from "../../../assets/Star.svg"

export function Testimonial() {
    return (
        <div className={styles.container}>
            <h4 className={styles.heading}>Testimonial</h4>
            <h3 className={styles.subHead}>
                What Our Customer Saying?
            </h3>
            <img className={styles.reviewer} src={Reviewer} />
            <img src={Star} />
            <p className={styles.text}>
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
            </p>
            <h4 className={styles.name}>Sara Taylor</h4>
            <p className={styles.text}>Consumer</p>
            <div className={styles.review}>

            </div>
            <div className={styles.divider}></div>
            <div className={styles.chart}>
                <Chart number="100%" text="Organic" />
                <Chart number="285" text="Active Product" />
                <Chart number="350+" text="Organic Orchards" />
                <Chart number="25+" text="Years of Farming" />
            </div>
        </div>
    )
}