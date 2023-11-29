import { Button } from "../../Button/Button"
import SubImg from "../../../assets/Subcribe.png"
import styles from "./Subscribe.module.css"

export function Subscribe() {
    return (
        <div className={styles.content}>
            <h3 className={styles.subText}>Subscribe to our Newsletter</h3>
            <div className={styles.inputEmail}>
                <input className={styles.email} type="email" placeholder="Your Email Address"></input>
                <Button variant="primary">
                    Subscribe
                </Button>
            </div>
        </div>

    )
}