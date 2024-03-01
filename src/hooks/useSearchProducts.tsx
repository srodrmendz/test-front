import { useState, useEffect } from "react";
import { SearchResponse } from "../models";
import { searchProducts } from "../services/products";

/**
 * useSearchProducts
 *
 * @param {string} name - Product name search.
 * @param {string} sort - Response sort.
 * @param {boolean} inStock - Response in stock filter.
 * Hook that fetch products
 */
const useSearchProducts = (name: string, sort: string, inStock: boolean) => {
    // state that handle fetch response
    const [data, setData] = useState<SearchResponse | null>(null);

    // state that handle searching state
    const [loading, setLoading] = useState(false);

    // state that handle fetch error
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        // fetch products is called every time that name, in stock and sort change
        const fetchProducts = async () => {
            try {
                setLoading(true);

                const response = await searchProducts(
                    name,
                    sort,
                    inStock,
                    20,
                    0,
                );

                setData(response);
            } catch (_) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [name, inStock, sort]);

    return { data, loading, error };
};

export default useSearchProducts;
