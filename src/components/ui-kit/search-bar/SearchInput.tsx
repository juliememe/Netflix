import React from "react";
import styles from './SearchInput.scss';

export const SearchInput: React.FC = () =>{
    return(
        <>
        <input className={styles.input} type={"search"} placeholder={"What do you want to watch?"}/>
            <button className={styles.btn} type={"submit"}>Search</button>
        </>
    )
}