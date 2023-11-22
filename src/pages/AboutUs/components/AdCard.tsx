import React from "react"
import styles from "./AdCart.module.css"

interface AdCardProps extends React.PropsWithChildren {
    icon: string;
    heading: string;
    text: string
}

export function AdCard({ icon, heading, text }: AdCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                <img className={styles.img} src={icon} />
            </div>
            <div className={styles.text}>
                <h4 className={styles.heading}>{heading}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}