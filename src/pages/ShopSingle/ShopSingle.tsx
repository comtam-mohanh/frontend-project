import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Layout } from "../../Layout/Layout";
import { ExtraInfo } from "./components/ExtraInfo";
import { ProductDetail } from "./components/ProductDetail";
import { RelatedProduct } from "./components/RelatedProduct";
import styles from "./ShopSingle.module.css"
import Background from "../../assets/single-bg.png"
import { useEffect } from 'react';

export function ShopSingle() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <Layout>
            <div className={styles.container}>
                <PageHeader text="Shop Single" bgImage={Background} />
                <ProductDetail />
                <ExtraInfo />
                <RelatedProduct />
            </div>
        </Layout>
    )
}