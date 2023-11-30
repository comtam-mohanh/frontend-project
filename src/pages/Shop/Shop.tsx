import { PageHeader } from "../../components/PageHeader/PageHeader"
import styles from "./Shop.module.css"
import bgImg from "../../assets/shop-bg.png"
import { Layout } from "../../Layout/Layout"
import { ProductCart } from "./components/ProductCard"
import Broc from "../../assets/broc.png"
import Banana from "../../assets/banana.png"
import Almond from "../../assets/Almond.png"
import Bread from "../../assets/Bread.png"
import Cashew from "../../assets/Cashew.png"
import Tom from "../../assets/CherryTom.png"
import Corn from "../../assets/Corn.png"
import Eggs from "../../assets/Eggs.png"
import Hazelnut from "../../assets/Hazelnut.png"
import Bean from "../../assets/Mung Bean.png"
import Pistachio from "../../assets/Pistachio.png"
import Zuc from "../../assets/Zucchini.png"
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { Routes } from "../../routes"

export function Shop() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const navigate = useNavigate()

    return (
        <Layout>
            <PageHeader text="Shop" bgImage={bgImg} />
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
            </a>
        </Layout>
    )
}