import styles from "./Logo.module.css"
import LogoImg from "../../../assets/Logo.svg"

export function Logo() {
    return (
        <div className={styles.logo}>
            <img className={styles.logoImg} src={LogoImg} alt="logo" />
            <h3>Organik</h3>
        </div>
    )
}