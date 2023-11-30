import styles from "./HomeAbout.module.css"
import BgImg from "../../../assets/orange-bg.png"
import Vegan from "../../../assets/Vegan Food.jpg"
import Mail from "../../../assets/Mailbox Quality.jpg"
import { Button } from "../../../components/Button/Button"
import { useNavigate } from "react-router-dom"
import { Routes } from "../../../routes"

export function HomeAbout() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <img className={styles.bgImg} src={BgImg} />
            <div className={styles.content}>
                <h4 className={styles.heading}>About Us</h4>
                <h3 className={styles.subHead}>
                    We Believe in Working Accredited Farmers
                </h3>
                <p className={styles.text}>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className={styles.iconText}>
                    <div className={styles.line}>
                        <div className={styles.icon}>
                            <img src={Vegan} />
                        </div>
                        <div>
                            <b>Organic Food Only</b>
                            <p className={styles.text}>
                                Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            </p>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.icon}>
                            <img src={Mail} />
                        </div>
                        <div>
                            <b>Quality Standards</b>
                            <p className={styles.text}>
                                Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            </p>
                        </div>
                    </div>
                </div>
                <Button variant="primary" onClick={() => {
                    navigate(Routes.SHOP)
                }}>
                    Shop Now
                </Button>
            </div>
        </div>
    )
}