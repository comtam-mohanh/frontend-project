import styles from "./WhyChooseUs.module.css"
import Img from "../../../assets/whychooseus-bg.png"
import Icon from "../../../assets/Icon circle.svg"
import { AdCard } from "./AdCard"
import Return from "../../../assets/Return Purchase.jpg"
import Natural from "../../../assets/Natural Food.jpg"
import Phone from "../../../assets/Phone Time.jpg"
import Card from "../../../assets/Card Security.jpg"

export function WhyChooseUs() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h4 className="title">
                        Why Choose Us?
                    </h4>
                    <h3 className="motto">
                        We do not buy from the open market & traders.
                    </h3>
                    <p className="text">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard the 1500s, when an unknown
                    </p>
                    <div className={styles.greybox}>
                        <img src={Icon} />
                        <b>100% Natural Product</b>
                    </div>
                    <p className="text">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                    <div className={styles.greybox}>
                        <img src={Icon} />
                        <b>Increases resistance</b>
                    </div>
                    <p className="text">Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                </div>
                <img className={styles.img} src={Img} />
            </div>
            <div className={styles.adcards}>
                <AdCard icon={Return}
                    heading="Return Policy"
                    text="Simply dummy text of the printintypesetting industry."
                />
                <AdCard icon={Natural}
                    heading="100% Fresh"
                    text="Simply dummy text of the printintypesetting industry."
                />
                <AdCard icon={Phone}
                    heading="Support 24/7"
                    text="Simply dummy text of the printintypesetting industry."
                />
                <AdCard icon={Card}
                    heading="Secured Payment"
                    text="Simply dummy text of the printintypesetting industry."
                />
            </div>
        </div>
    )
}