import styles from "./ProductDetail.module.css"
import Broc from "../../../assets/broc.png"
import Star from "../../../assets/Star.svg"
import { Button } from "../../../components/Button/Button"

export function ProductDetail() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <div className={styles.category}>
                    Vegetable
                </div>
                <img className={styles.img} src={Broc} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>Health Fresh Broccoli</h2>
                <b className={styles.price}>$13.00</b>
                <img className={styles.stars} src={Star} />
                <p className={styles.text}>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className={styles.quantity}>
                    <b className={styles.price}>Quantity :</b>
                    <input className={styles.inputNumber} type="number" min={0} placeholder="1" />
                    <Button variant="primary">
                        Add To Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}