import React from "react";
import { Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "./searchBar/SearchBar";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.headerRoot}>
      <div className={styles.wrapper}>
        {pathname === "/form" ? (
          <Typography>Dodaj ogłoszenie</Typography>
        ) : (
          <SearchBar />
        )}
      </div>
    </div>
  );
};

export default Header;
