import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductCard from "../ProductCard";

describe("ProductCard Component render use cases", () => {
    it("check if handle buy event is clicked", () => {
        // Given
        const handleBuyMock = jest.fn();

        // When
        const { getByText } = render(
            <ProductCard
                handleBuy={handleBuyMock}
                id=""
                images={[]}
                inStock
                name=""
                price={100}
                qty={20}
            />,
        );

        const buyButton = getByText("Buy");

        fireEvent.click(buyButton);

        // Then
        expect(handleBuyMock).toHaveBeenCalled();
    });

    it("check price is displayed formatted correctly", () => {
        // Given

        // When
        const { getByText } = render(
            <ProductCard
                handleBuy={() => {}}
                id=""
                images={[]}
                inStock
                name=""
                price={1000}
                qty={20}
            />,
        );

        const priceText = getByText("Price: 10");

        // Then
        expect(priceText).toBeInTheDocument();
    });

    it("check in stock message text is displayed if product has stock", () => {
        // Given

        // When
        const { getByText } = render(
            <ProductCard
                handleBuy={() => {}}
                id=""
                images={[]}
                inStock
                name=""
                price={1000}
                qty={20}
            />,
        );

        const text = getByText("InStock: Yes");

        // Then
        expect(text).toBeInTheDocument();
    });

    it("check no stock message text is displayed if product has empty stock", () => {
        // Given

        // When
        const { getByText } = render(
            <ProductCard
                handleBuy={() => {}}
                id=""
                images={[]}
                inStock={false}
                name=""
                price={1000}
                qty={20}
            />,
        );

        const text = getByText("InStock: No");

        // Then
        expect(text).toBeInTheDocument();
    });
});
