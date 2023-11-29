import styles from "./ExtraInfo.module.css"
import React from "react";


export function ExtraInfo() {
    const [isClicked, setIsClicked] = React.useState(true);
    const [isClicked1, setIsClicked1] = React.useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <button type="button" className={isClicked ? styles.chosen : styles.notChosen}
                    onClick={() => {
                        if (!isClicked) {
                            setIsClicked(!isClicked)
                            setIsClicked1(false)
                        }
                    }}>
                    Product Description
                </button>
                <button type="button" className={isClicked1 ? styles.chosen : styles.notChosen}
                    onClick={() => {
                        if (!isClicked1) {
                            setIsClicked1(!isClicked1)
                            setIsClicked(false)
                        }
                    }}>
                    Additional Info
                </button>
            </div>
            <div className={styles.info}>
                <p className={isClicked ? styles.textShow : styles.textHide}>
                    Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
                </p>
                <p className={isClicked1 ? styles.textShow : styles.textHide}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
            </div>
        </div >
    )
}