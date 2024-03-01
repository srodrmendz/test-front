import React from "react";
import styles from "./App.styles";
import ProductList from "./components/ProductList/ProductList";
import useSearchProducts from "./hooks/useSearchProducts";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const App: React.FC = () => {
    const { data, loading, error } = useSearchProducts();

    if (loading) {
        return (
            <div className={styles.root}>
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }

    return (
        <div className={styles.root}>
            <ProductList products={data?.products ?? []} />
        </div>
    );
};

export default App;
