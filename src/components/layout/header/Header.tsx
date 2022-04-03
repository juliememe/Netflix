import React from "react";
import styles from './Header.scss';
import {Logo} from "../../ui-kit/logo";
import {AddButton} from "../../ui-kit/add-button";
import {SearchInput} from "../../ui-kit/search-bar";
import {ComponentCenter} from "../../../utils/component-centerer";

export const Header: React.FC = () =>{
    return(
        <header className={styles.content}>
            <div className={styles.container}>
            <div className={styles.upper}>
            <Logo/>
            <AddButton/>
            </div>
                <div className={styles.middle}>
                <h2 className={styles.slogan}>Find your movie</h2>
                    <ComponentCenter>
                        <SearchInput/>
                    </ComponentCenter>

            </div>
            </div>
        </header>
    )
}