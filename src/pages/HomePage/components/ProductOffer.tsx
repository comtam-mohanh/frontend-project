import styles from "./ProductOffer.module.css"
import Cashew from "../../../assets/Cashew.png"
import Tom from "../../../assets/CherryTom.png"
import Corn from "../../../assets/Corn.png"
import Eggs from "../../../assets/Eggs.png"
import { ProductCart } from "../../Shop/components/ProductCard"
import { Button } from "../../../components/Button/Button"
import { useNavigate } from "react-router-dom"
import { Routes } from "../../../routes"

export function ProductOffer() {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div>
                    <h4 className={styles.heading}>Offer</h4>
                    <h3 className={styles.subHead}>
                        We Offer Organic For You
                    </h3>
                </div>
                <Button variant="secondary" onClick={() => {
                    navigate(Routes.SHOP)
                }}>
                    View All Product
                </Button>
            </div>
            <a className={styles.products} onClick={() => {
                navigate(Routes.SHOP_SINGLE)
            }}>
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
            </a>
        </div>
    )
}