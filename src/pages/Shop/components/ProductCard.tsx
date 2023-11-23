import styles from "./ProductCard.module.css"
import React from "react"
import Stars from "../../../assets/Star.svg"

interface ProductCartProps extends React.PropsWithChildren {
    category: string;
    productImg: string;
    name: string;
    price: string;
}

export function ProductCart({ category, productImg, name, price }: ProductCartProps) {
    return (
        <div className={styles.card} >
            <div className={styles.category}>
                {category}
            </div>
            <div>
                <img className={styles.productImg} src={productImg} alt="product item" />
            </div>
            <div className={styles.detail}>
                <h4 className={styles.name}>
                    {name}
                </h4>
                <div className={styles.divider}></div>
                <div className={styles.bottomDetail}>
                    <p className={styles.price}>{price}</p>
                    <img className={styles.stars} src={Stars} />
                </div>
            </div>
        </div >
    )
}