import { ProductCart } from "../../Shop/components/ProductCard"
import styles from "./Categories.module.css"
import Broc from "../../../assets/broc.png"
import Banana from "../../../assets/banana.png"
import Almond from "../../../assets/Almond.png"
import Bread from "../../../assets/Bread.png"
import Hazelnut from "../../../assets/Hazelnut.png"
import Bean from "../../../assets/Mung Bean.png"
import Pistachio from "../../../assets/Pistachio.png"
import Zuc from "../../../assets/Zucchini.png"
import { Button } from "../../../components/Button/Button"

export function Categories() {
    return (
        <div className={styles.container}>
            <h4 className={styles.heading}>Categories</h4>
            <h3 className={styles.title}>Our Products</h3>
            <div className={styles.products}>
                <ProductCart
                    category="Vegetable"
                    productImg={Broc}
                    name="Calabrese Broccoli"
                    price="$13.00" />
                <ProductCart
                    category="Fresh"
                    productImg={Banana}
                    name="Fresh Banana"
                    price="$14.00" />
                <ProductCart
                    category="Nuts"
                    productImg={Almond}
                    name="Organic Almond"
                    price="$15.00" />
                <ProductCart
                    category="Fresh"
                    productImg={Bread}
                    name="Zelco Suji Elaichi Rusk"
                    price="$20.00" />
                <ProductCart
                    category="Nuts"
                    productImg={Hazelnut}
                    name="Brown Hazelnut"
                    price="$22.00" />
                <ProductCart
                    category="Health"
                    productImg={Bean}
                    name="Mung Bean"
                    price="$10.00" />
                <ProductCart
                    category="Nuts"
                    productImg={Pistachio}
                    name="Organic Pastachio"
                    price="$19.00" />
                <ProductCart
                    category="Vegetable"
                    productImg={Zuc}
                    name="Vietnamese Zucchini"
                    price="$17.00" />
            </div>
            <Button variant="primary">
                Load More
            </Button>
        </div>
    )
}