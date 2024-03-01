import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { defaultPlaceHolder } from "../../constants";

interface Props {
    id: string;
    name: string;
    images: string[];
    description?: string;
    price: number;
    qty: number;
    inStock: boolean;
    handleBuy: (id: string) => void;
}

/**
 * ProductCard
 *
 * @param {string} id - Product Id.
 * @param {string} name - Product Name.
 * @param {string[]} images - Product Images.
 * @param {string} description - Product description.
 * @param {number} price - Product price.
 * @param {number} qty - Product Quantity.
 * @param {any} handleBuy - handleBuy.
 *
 * Render product details
 */
const ProductCard: React.FC<Props> = ({
    id,
    name,
    images,
    description,
    price,
    qty,
    inStock,
    handleBuy,
}) => {
    return (
        <Card>
            <CardMedia
                sx={{ height: 140 }}
                image={images[0] ?? defaultPlaceHolder}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="caption" component="div">
                    {name}
                </Typography>

                {description && (
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                )}

                <Typography variant="body2" color="text.secondary">
                    Price: {price / 100}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Quantity: {qty}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    InStock: {inStock ? " Yes" : "No"}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => handleBuy(id)}>
                    Buy
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
