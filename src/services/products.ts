import { SearchResponse } from "../models";

/**
 * searchProducts
 *
 * @param {string} name - Product name search.
 * @param {string} sort - Response sort.
 * @param {boolean} inStock - Response in stock filter.
 * @param {number} limit - Response max length.
 * @param {number} limit - Response max length.
 * @param {number} offset - Pagination offset.
 *
 * Search for products
 */
export const searchProducts = async (
    name: string,
    sort: string,
    inStock: boolean,
    limit: number,
    offset: number,
): Promise<SearchResponse> => {
    const qp = {
        limit: `${limit}`,
        offset: `${offset}`,
        name: name,
        sort: sort,
        in_stock: `${inStock}`,
    };

    const queryString = new URLSearchParams(qp).toString();

    const endpoint = `${process.env.REACT_APP_API_URL}/v1?${queryString}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error("fetching products");
    }

    return await response.json();
};
