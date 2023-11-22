import { Member } from "./Member"
import styles from "./Team.module.css"
import Employee1 from "../../../assets/Employee-1.jpg"
import Employee2 from "../../../assets/Employee-2.jpg"
import Employee3 from "../../../assets/Employee-3.jpg"

export function Team() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h4 className={styles.title}>Team</h4>
                <h4 className={styles.subHeading}>Our Organic Experts</h4>
                <p className={styles.text}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
            <div className={styles.teamMember}>
                <Member profilePic={Employee1} name="Giovani Bacardo" title="Farmer" />
                <Member profilePic={Employee2} name="Marianne Loreno" title="Designer" />
                <Member profilePic={Employee3} name="Riga Pelore" title="Farmer" />
            </div>

        </div>
    )
}