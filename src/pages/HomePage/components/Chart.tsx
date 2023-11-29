import React from "react"
import styles from "./Chart.module.css"

interface ChartProps extends React.PropsWithChildren {
    number: string;
    text: string;
}

export function Chart({ number, text }: ChartProps) {
    return (
        <div className={styles.container}>
            <h3 className={styles.number}>{number}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    )
}