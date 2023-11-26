import styles from "./PicOption.module.css"
import Juice from "../../../assets/bottle.png"
import Food from "../../../assets/whychooseus-bg.png"
import Cookies from "../../../assets/sweet.png"


export function PicOption() {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <img className={styles.img} src={Juice} />
                <div className={styles.text}>
                    <b>Organic Juice</b>
                </div>
            </div>

            <div className={styles.block}>
                <img className={styles.img} src={Food} />
                <div className={styles.text}>
                    <b>Organic Food</b>
                </div>
            </div>

            <div className={styles.block}>
                <img className={styles.img} src={Cookies} />
                <div className={styles.text}>
                    <b>Nuts Cookies</b>
                </div>
            </div>
        </div>
    )
}