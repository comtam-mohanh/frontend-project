import styles from "./Header.module.css"
import Search from "../../assets/Search Icon.svg"
import Cart from "../../assets/Cart Icon.svg"
import { Logo } from "./components/Logo"

import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes";


export function Header() {
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <Logo />
            <div className={styles.menu}>
                <a className={styles.menu} onClick={() => {
                    navigate(Routes.HOME);
                }} href="">Home</a>

                <a className={styles.menu} onClick={() => {
                    navigate(Routes.ABOUT_US);
                }} href="">About</a>
                <div className={styles.dropdown}>
                    <a className={styles.menu} id={styles["drop"]} href="">Pages</a>

                    <div className={styles.dropdownContent}>
                        <a className={styles.content} href="#">Link 1</a>
                        <a className={styles.content} href="#">Link 2</a>
                        <a className={styles.content} href="#">Link 3</a>
                    </div>
                </div>
                <a className={styles.menu} onClick={() => {
                    navigate(Routes.SHOP);
                }} href="">Shop</a>

                <a className={styles.menu} onClick={() => {
                    navigate(Routes.ERROR);
                }} href="">Projects</a>

                <a className={styles.menu} onClick={() => {
                    navigate(Routes.ERROR);
                }} href="">News</a>
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
        </div >
    )
}