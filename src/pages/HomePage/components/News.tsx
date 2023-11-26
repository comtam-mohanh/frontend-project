import { Button } from "../../../components/Button/Button";
import styles from "./News.module.css"
import Lettuce from "../../../assets/lettuce.png"
import Tomato from "../../../assets/tomato.png"
import Vector from "../../../assets/Vector.svg"

export function News() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div>
                    <h4 className={styles.heading}>News</h4>
                    <h3 className={styles.subHead}>
                        Discover weekly content about organic food, & more
                    </h3>
                </div>
                <Button variant="teriary">
                    More News
                </Button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.block}>
                    <div className={styles.date}>
                        <b className={styles.text}>25 Nov</b>
                    </div>
                    <img className={styles.img} src={Lettuce} />


                    <div className={styles.content}>
                        <div className={styles.firstLine}>
                            <img src={Vector} />
                            <p className={styles.text}>By Rachi Card</p>
                        </div>
                        <b className={styles.text}>The Benefits of Vitamin D & How to Get It</b>
                        <p className={styles.text}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        <Button variant="secondary">
                            Read More
                        </Button>
                    </div>
                </div>

                <div className={styles.block}>
                    <div className={styles.date}>
                        <b className={styles.text}>25 Nov</b>
                    </div>
                    <img className={styles.img} src={Tomato} />
                    <div className={styles.content}>
                        <div className={styles.firstLine}>
                            <img src={Vector} />
                            <p className={styles.text}>By Rachi Card</p>
                        </div>
                        <b className={styles.text}>Our Favourite Summertime Tommeto</b>
                        <p className={styles.text}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        <Button variant="secondary">
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}