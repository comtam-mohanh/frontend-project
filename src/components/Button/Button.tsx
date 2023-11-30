import React, { ButtonHTMLAttributes } from "react"
import styles from "./Button.module.css"
import arrow from "../../assets/Aerrow.svg"

type ButtonProps = {
    variant: "primary" | "secondary" | "teriary"
} & React.ComponentProps<"button">


export function Button({ children, variant, onClick }: ButtonProps) {
    return (
        <button
            className={styles.button}
            id={styles[`${variant}-btn`]}
            onClick={onClick}
        >
            {children}
            <img className={styles.arrow} src={arrow} alt="arrow" />
        </button >
    )
}
