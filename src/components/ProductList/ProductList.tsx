import React from "react";
import styles from "./ProductList.styles";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../models";

interface Props {
    products: Product[];
}

/**
 * ProductCard
 *
 * @param {Product[]} products - Products.
 *
 * Render products details
 */
const ProductList: React.FC<Props> = ({ products }) => {
    // is called when user clicks handle buy button
    const handleBuy = (id: string) => {
        console.log(`Buy product ${id}`);
    };

    return (
        <Grid container>
            {products.map((product) => (
                <Grid item xs={3} className={styles.item}>
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        images={product.images ?? []}
                        description={product.description}
                        price={product.price}
                        qty={product.qty}
                        inStock={product.in_stock}
                        handleBuy={handleBuy}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
