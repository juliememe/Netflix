import React from "react";
import styles from './add-button.scss';

export const AddButton: React.FC = () => {
    return <button className={styles.addButton} type={"button"}>+Add movie</button>;
}