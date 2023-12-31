import { ProductCart } from "../../Shop/components/ProductCard"
import styles from "./RelatedProduct.module.css"
import Broc from "../../../assets/broc.png"
import Banana from "../../../assets/banana.png"
import Almond from "../../../assets/Almond.png"
import Bread from "../../../assets/Bread.png"
import { useNavigate } from "react-router-dom"
import { Routes } from "../../../routes"

export function RelatedProduct() {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Related Products</h3>
            <a className={styles.products} onClick={() => {
                navigate(Routes.SHOP_SINGLE)
            }}>
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
            </a>
        </div>
    )
}