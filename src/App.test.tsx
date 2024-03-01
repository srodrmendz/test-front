import React from "react";
import { render } from "@testing-library/react";
import * as hooks from "./hooks/useSearchProducts";
import App from "./App";

jest.mock("./hooks/useSearchProducts", () => ({
    useSearchProducts: jest.fn(),
}));

describe("App Component render use cases", () => {
    it("render spinner, hook is fetching products data", () => {
        // Given

        // When
        (hooks.useSearchProducts as jest.Mock).mockReturnValue({
            loading: true,
        });

        const { getByRole } = render(<App />);

        const loadingProgress = getByRole("progressbar");

        // Then
        expect(loadingProgress).toBeInTheDocument();
    });

    it("render alert error, hook return error data", () => {
        // Given

        // When
        (hooks.useSearchProducts as jest.Mock).mockReturnValue({
            error: true,
        });

        const { getByText } = render(<App />);

        const alert = getByText("Fetching products");

        // Then
        expect(alert).toBeInTheDocument();
    });

    it("render warning alert, hook return empty product list", () => {
        // Given

        // When
        (hooks.useSearchProducts as jest.Mock).mockReturnValue({
            products: [],
        });

        const { getByText } = render(<App />);

        const alert = getByText("No products match criteria");

        // Then
        expect(alert).toBeInTheDocument();
    });
    it("render product cards, hook return product list", () => {
        // Given

        // When
        (hooks.useSearchProducts as jest.Mock).mockReturnValue({
            data: {
                products: [{ id: "1", name: "Product1", price: 600 }],
            },
        });

        const { getByText } = render(<App />);

        const productCard = getByText("Product1");

        // Then
        expect(productCard).toBeInTheDocument();
    });
});
