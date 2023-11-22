import React from "react"
import styles from "./Member.module.css"
import Ig from "../../../assets/1.svg"
import Fb from "../../../assets/2.svg"
import Twit from "../../../assets/3.svg"


interface MemberProps extends React.PropsWithChildren {
    profilePic: string;
    name: string;
    title: string;
}

export function Member({ profilePic, name, title }: MemberProps) {
    return (
        <div className={styles.card}>
            <img className={styles.profile} src={profilePic} alt="Staff Picture Profile" />
            <div className={styles.detail}>
                <div>
                    <h5 className={styles.name}>{name}</h5>
                    <h6 className={styles.title}>{title}</h6>
                </div>
                <div className={styles.social}>
                    <img className={styles.icon} src={Ig} />
                    <img className={styles.icon} src={Fb} />
                    <img className={styles.icon} src={Twit} />
                </div>
            </div>
        </div>
    )
}