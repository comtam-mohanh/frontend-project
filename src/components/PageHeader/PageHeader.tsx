import React from "react"
import styles from "./PageHeader.module.css"

interface PageHeaderProps extends React.PropsWithChildren {
    text: string
    bgImage: string
}
export function PageHeader({ text, bgImage }: PageHeaderProps) {
    return (
        <div className={styles.container}>
            <img className={styles.bgImg} src={bgImage} alt="background image" />
            <h2 className={styles.text}>{text}</h2>
        </div>
    )
}