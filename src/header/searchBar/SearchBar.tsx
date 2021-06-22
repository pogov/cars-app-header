import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    document.dispatchEvent(
      new CustomEvent("car_search", { bubbles: true, detail: search })
    );
  }, [search]);
  return (
    <div className={styles.searchbar_wrapper}>
      <SearchIcon fontSize="large" />
      <TextField
        variant="outlined"
        onChange={handleChange}
        label="szukaj po modelu lub marce"
        className={styles.text_field}
        size="small"
      />
    </div>
  );
};

export default SearchBar;
