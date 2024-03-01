import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SearchBarSort from "../SearchBarSort/SearchBarSort";

interface Props {
    name: string;
    sort: string;
    inStock: boolean;
    changeSort: (v: string) => void;
    changeName: (v: string) => void;
    changeInStock: (v: boolean) => void;
}

/**
 * SearchBar
 *
 * @param {string} sort - Search sort, posible values are asc and dec.
 * @param {string} name - Search name.
 * @param {string} inStock - In Stock filter.
 * @param {any} changeSort - Change sort value.
 * @param {any} changeName - Change name value.
 * @param {any} changeInStock - Change in stock value.
 *
 * Render products search bar
 */
const SearchBar: React.FC<Props> = ({
    sort,
    name,
    inStock,
    changeSort,
    changeName,
    changeInStock,
}) => {
    return (
        <Grid container>
            <Grid item xs={2}>
                <TextField
                    id="name"
                    label="Name"
                    variant="filled"
                    value={name}
                    onChange={(e) => changeName(e.target.value)}
                />
            </Grid>
            <Grid item xs={1}>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                defaultChecked
                                value={inStock}
                                onChange={(e) =>
                                    changeInStock(e.target.checked)
                                }
                            />
                        }
                        label="In Stock"
                    />
                </FormGroup>
            </Grid>
            <Grid item xs={2}>
                <SearchBarSort handleChange={changeSort} sort={sort} />
            </Grid>
        </Grid>
    );
};

export default SearchBar;
