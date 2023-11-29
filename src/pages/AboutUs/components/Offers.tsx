import Spicy from "../../../assets/Spicy.jpg"
import Nuts from "../../../assets/Nuts.jpg"
import Fruit from "../../../assets/Fruit.jpg"
import Veg from "../../../assets/Veg.jpg"
import styles from "./Offers.module.css"

export function Offers() {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>About Us</h4>
            <h3 className={styles.subHead}>What We Offer for You</h3>
            <div className={styles.categories}>
                <div className="item">
                    <img className={styles.category} src={Spicy} />
                    <b>Spicy</b>
                </div>
                <div className="item">
                    <img className={styles.category} src={Nuts} />
                    <b>Nuts & Seeds</b>
                </div>
                <div className="item">
                    <img className={styles.category} src={Fruit} />
                    <b>Fruit</b>
                </div>
                <div className="item">
                    <img className={styles.category} src={Veg} />
                    <b>Vegetable</b>
                </div>
            </div>
        </div>
    )
}