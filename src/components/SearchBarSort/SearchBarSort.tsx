import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
    sort: string;
    handleChange: (v: string) => void;
}

/**
 * SearchBarSortBy
 *
 * @param {string} sort - Search sort, posible values are asc and desc.
 * @param {any} handleChange - Change sort value.
 *
 * Render products search bar
 */
const SearchBarSort: React.FC<Props> = ({ sort, handleChange }) => {
    const changeValue = (event: SelectChangeEvent) => {
        handleChange(event.target.value as string);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="sort-select-label">Sort</InputLabel>
            <Select
                labelId="sort-label"
                id="sort"
                value={sort}
                label="sort"
                onChange={changeValue}
            >
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SearchBarSort;
