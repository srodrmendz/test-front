import { SearchResponse } from "../models";

/**
 * searchProducts
 *
 * @param {number} limit - Response max length.
 * @param {number} offset - Pagination offset.
 *
 * Search for products
 */
export const searchProducts = async (
    limit: number,
    offset: number,
): Promise<SearchResponse> => {
    const qp = {
        limit: `${limit}`,
        offset: `${offset}`,
    };

    const queryString = new URLSearchParams(qp).toString();

    const endpoint = `${process.env.REACT_APP_API_URL}/v1?${queryString}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error("fetching products");
    }

    return await response.json();
};
