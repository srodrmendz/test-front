import React, { useState } from "react";
import styles from "./App.styles";
import ProductList from "./components/ProductList/ProductList";
import SearchBar from "./components/SearchBar/SearchBar";
import useSearchProducts from "./hooks/useSearchProducts";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { SearchResponse } from "./models";

const App: React.FC = () => {
    // state that handle products name search query
    const [name, setName] = useState<string>("");

    // state that handle product in stock query
    const [inStock, setInStock] = useState<boolean>(true);

    // state that handle product sort response
    const [sort, setSort] = useState<string>("asc");

    const changeInStock = (v: boolean) => {
        setInStock(v);
    };

    const changeName = (v: string) => {
        setName(v);
    };

    const changeSort = (v: string) => {
        setSort(v);
    };

    // resolve render product section
    const getProductSection = (
        loading: boolean,
        error: boolean,
        data: SearchResponse | null,
    ) => {
        if (loading) {
            return;
        }

        if (error) {
            return;
        }

        if (data?.products?.length) {
            return <ProductList products={data?.products} />;
        }

        return <Alert severity="warning">No products match criteria</Alert>;
    };

    const { data, loading, error } = useSearchProducts(name, sort, inStock);

    return (
        <div className={styles.root}>
            <Grid container>
                <Grid item xs={12} className={styles.searchBar}>
                    <SearchBar
                        name={name}
                        inStock={inStock}
                        sort={sort}
                        changeInStock={changeInStock}
                        changeName={changeName}
                        changeSort={changeSort}
                    />
                </Grid>

                <Grid item xs={12}>
                    {loading && <CircularProgress />}

                    {error && <Alert severity="error">Fetching products</Alert>}

                    {getProductSection(loading, error, data)}
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
