import styles from "./Eco.module.css"
import BgImg from "../../../assets/eco-bg.png"

export function Eco() {
    return (
        <div className={styles.container}>
            <img className={styles.BgImg} src={BgImg} />
            <div className={styles.empty}></div>
            <div className={styles.content}>
                <h4 className={styles.heading}>Eco Friendly</h4>
                <h3 className={styles.subHead}>
                    Econis is a Friendly Organic Store
                </h3>
                <b className={styles.bold}>Start with Our Company First</b>
                <p className={styles.text}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
                <b className={styles.bold}>Learn How to Grow Yourself</b>
                <p className={styles.text}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
                <b className={styles.bold}>Farming Strategies of Today</b>
                <p className={styles.text}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
            </div>
        </div>
    )
}