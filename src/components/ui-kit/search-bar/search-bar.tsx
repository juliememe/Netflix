import React from "react";
import styles from './search-bar.scss';

export const SearchBar: React.FC = () =>{
    return(
        <>
        <input className={styles.searchBar} type={"search"} placeholder={"What do you want to watch?"}/>
            <button className={styles.searchBtn} type={"submit"}>Search</button>
        </>
    )
}