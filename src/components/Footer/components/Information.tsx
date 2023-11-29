import styles from "./Information.module.css"
import Insta from "../../../assets/1.svg"
import Fb from "../../../assets/2.svg"
import Tweet from "../../../assets/3.svg"
import Pin from "../../../assets/4.svg"
import { Logo } from "../../Header/components/Logo"

export function Information() {
    return (
        <div className={styles.information}>
            <div className={styles.contact}>
                <h3>Contact Us</h3>

                <p><b>Email</b></p>
                <p>needhelp@Organia.com </p>

                <p><b>Phone </b></p>
                <p>666 888 888</p>

                <p><b>Address</b></p>
                <p>88 road, borklyn street, USA</p>

            </div>
            <div className={styles.divider}></div>
            <div className={styles.social}>
                <Logo />
                <p>
                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing
                </p>
                <div className={styles.links}>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={Insta} />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={Fb} />
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <img src={Tweet} />
                    </a>
                    <a href="https://www.pinterest.com/" target="_blank">
                        <img src={Pin} />
                    </a>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.ultility}>
                <h3>Ultility Pages</h3>

                <p>Style Guide </p>
                <p>404 Not Found </p>
                <p>Password Protected </p>
                <p>Licences </p>
                <p>Changelog </p>
            </div>
        </div>
    )
}