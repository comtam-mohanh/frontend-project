import { Button } from "../../../components/Button/Button";
import { Routes } from "../../../routes";
import styles from "./Top.module.css"
import { useNavigate } from "react-router-dom";

export function Top() {
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.container}>
                <h4 className={styles.heading}>
                    100% Natural Food
                </h4>
                <h2 className={styles.subHead}>
                    Choose the best healthier way of life
                </h2>
                <Button variant="secondary" onClick={() => {
                    navigate(Routes.ABOUT_US);
                }}>
                    Explore Now
                </Button>
            </div>
            <div className={styles.sale}>
                <div className={styles.sale1}>
                    <h4 className={styles.firstText}>Natural!!</h4>
                    <b className={styles.secondText}>Get Garden Fresh Fruit</b>
                </div>
                <div className={styles.sale2}>
                    <h4 className={styles.firstText}>Offer!!</h4>
                    <b className={styles.secondText}>Get 10% off on Vegetables</b>
                </div>
            </div>
        </div>
    )
}