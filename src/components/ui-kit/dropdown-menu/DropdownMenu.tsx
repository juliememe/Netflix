import React from "react";
import styles from './DropdownMenu.scss';

export const DropdownMenu: React.FC = () => {
return(
    <div className={styles.content}>
        <span className={styles.sort}>Sort by</span>
        <select className={styles.select}>
            <option>Release Date</option>
        </select>

    </div>
)
}