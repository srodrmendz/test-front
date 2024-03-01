import React from "react";
import { render } from "@testing-library/react";
import ProductList from "../ProductList";

describe("ProductList Component render use cases", () => {
    it("check if product cards rendered length are equal than products length", () => {
        // Given
        const products = [
            {
                id: "1",
                name: "Product",
                created_at: "02/09/2024",
                in_stock: true,
                price: 200,
                qty: 30,
                sku: "1",
                updated_at: "02/09/2024",
            },
            {
                id: "2",
                name: "Product",
                created_at: "02/09/2024",
                in_stock: true,
                price: 2000,
                qty: 34,
                sku: "2",
                updated_at: "02/09/2024",
            },
            {
                id: "3",
                name: "Product",
                created_at: "02/09/2024",
                in_stock: true,
                price: 2000,
                qty: 34,
                sku: "3",
                updated_at: "02/09/2024",
            },
        ];

        // When
        const { getAllByText } = render(<ProductList products={products} />);

        const data = getAllByText("Product");

        // Then
        expect(data).toHaveLength(products.length);
    });
});
