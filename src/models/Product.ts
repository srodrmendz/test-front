// Represents product model
export interface Product {
    id: string;
    name: string;
    description?: string;
    sku: string;
    qty: number;
    images?: string[];
    created_at: string;
    updated_at: string;
    price: number; // in cents
    in_stock: boolean;
}

// Represents pagination metadata obtained from search products method
export interface Metadata {
    total: number;
    limit: number;
    offset: number;
}

// Represents response from search products
export interface SearchResponse {
    products: Product[];
    metadata: Metadata;
}
