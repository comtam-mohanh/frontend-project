import styles from "./ExtraInfo.module.css"
import React from "react";

const tabs = [
    {
        title: "Product Description",
        content: "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw."
    },
    {
        title: "Additional Info",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
        title: "To",
        content: "123"
    }
]


export function ExtraInfo() {
    const [currentTab, setCurrentTab] = React.useState(0);

    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                {tabs.map(
                    (tab, index) =>
                        <button type="button" className={currentTab === index ? styles.chosen : styles.notChosen}
                            onClick={() => {
                                if (currentTab != index) {
                                    setCurrentTab(index)
                                }
                            }}>
                            {tab.title}
                        </button>
                )}
            </div>
            <div className={styles.info}>

                <p className={styles.textShow}>
                    {tabs[currentTab].content}
                </p>
            </div>
        </div >
    )
}