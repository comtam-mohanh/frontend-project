import styles from "./Header.module.css"

import Search from "../../assets/Search Icon.svg"
import Cart from "../../assets/Cart Icon.svg"
import { Logo } from "./components/Logo"

export function Header() {
    return (
        <div className={styles.header}>
            <Logo />

            <div className={styles.menu}>
                <a className={styles.menu} href="">Home</a>
                <a className={styles.menu} href="">About</a>
                <a className={styles.menu} href="">Pages</a>
                <a className={styles.menu} href="">Shop</a>
                <a className={styles.menu} href="">Projects</a>
                <a className={styles.menu} href="">News</a>
            </div>

            <div className={styles.rightMenu}>
                <div className={styles.search}>
                    <img className={styles.searchIcon} src={Search} />
                </div>
                <div className={styles.cart}>
                    <img className={styles.cartIcon} src={Cart} />
                    <h4>Cart (0)</h4>
                </div>
            </div>
        </div>
    )
}