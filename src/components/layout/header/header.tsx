import React from "react";
import styles from './header.scss';
import {Logo} from "../../ui-kit/logo";
import {AddButton} from "../../ui-kit/add-button";
import {SearchBar} from "../../ui-kit/search-bar";

export const Header: React.FC = () =>{
    return(
        <header className={styles.header}>
            <div className={styles.headerContainer}>
            <div className={styles.upperHeader}>
            <Logo/>
            <AddButton/>
            </div>
                <div className={styles.headerMiddle}>
                <h2 className={styles.slogan}>Find your movie</h2>
            <div className={styles.searchBar}>
            <SearchBar/>
            </div>
            </div>
            </div>
        </header>
    )
}