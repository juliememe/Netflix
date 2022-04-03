import React from "react";
import styles from './AddButton.scss';

export const AddButton: React.FC = () => {
    return <button className={styles.add} type={"button"}>+Add movie</button>;
}