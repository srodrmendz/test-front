import { useState, useEffect } from "react";
import { SearchResponse } from "../models";
import { searchProducts } from "../services/products";

/**
 * useSearchProducts
 *
 *
 * Hook that fetch products
 */
const useSearchProducts = () => {
    // state that handle fetch response
    const [data, setData] = useState<SearchResponse | null>(null);

    // state that handle searching state
    const [loading, setLoading] = useState(false);

    // state that handle fetch error
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);

                const response = await searchProducts(20, 0);

                setData(response);
            } catch (error) {
                setError(`fetching products ${error}`);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { data, loading, error };
};

export default useSearchProducts;
