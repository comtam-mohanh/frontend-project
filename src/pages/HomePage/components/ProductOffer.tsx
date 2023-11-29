import styles from "./ProductOffer.module.css"
import Cashew from "../../../assets/Cashew.png"
import Tom from "../../../assets/CherryTom.png"
import Corn from "../../../assets/Corn.png"
import Eggs from "../../../assets/Eggs.png"
import { ProductCart } from "../../Shop/components/ProductCard"
import { Button } from "../../../components/Button/Button"

export function ProductOffer() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div>
                    <h4 className={styles.heading}>Offer</h4>
                    <h3 className={styles.subHead}>
                        We Offer Organic For You
                    </h3>
                </div>
                <Button variant="secondary">
                    View All Product
                </Button>
            </div>
            <div className={styles.products}>
                <ProductCart
                    category="Nuts"
                    productImg={Cashew}
                    name="Organic Cashew Nuts"
                    price="$17.00" />
                <ProductCart
                    category="Vegetable"
                    productImg={Tom}
                    name="Vegan Red Tomato"
                    price="$16.00" />
                <ProductCart
                    category="Vegetable"
                    productImg={Corn}
                    name="Fresh Corn"
                    price="$11.00" />
                <ProductCart
                    category="Fresh"
                    productImg={Eggs}
                    name="Free Range Eggs"
                    price="$12.00" />
            </div>
        </div>
    )
}