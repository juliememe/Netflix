import React from "react";
import styles from './navigation.scss';

export const Navigation: React.FC = ()=>{
    return(
            <ul className={styles.navigation}>
                <li><a href={'#'}>All</a></li>
                <li><a href={'#'}>Documentary</a></li>
                <li><a href={'#'}>Comedy</a></li>
                <li><a href={'#'}>Horror</a></li>
                <li><a href={'#'}>Crime</a></li>
            </ul>

    )
}