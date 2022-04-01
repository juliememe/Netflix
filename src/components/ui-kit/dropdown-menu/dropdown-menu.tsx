import React from "react";
import styles from './dropdown-menu.scss';

export const DropdownMenu: React.FC = () => {
return(
    <div className={styles.dropDown}>
        <span className={styles.sort}>Sort by</span>
        <select className={styles.select}>
            <option>Release Date</option>
        </select>

    </div>
)
}