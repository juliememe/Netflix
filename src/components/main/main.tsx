import React from "react";
import {Navigation} from "../layout/navigation";
import {DropdownMenu} from "../ui-kit/dropdown-menu";
import {MovieCard} from "../layout/movie-card";
import styles from './main.scss';

export const Main: React.FC = () =>{
    const movieList = [
        {
            id: '1a',
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {   id: "2b",
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {
            id: "3e",
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {
            id: '1a',
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {   id: "2b",
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {
            id: "3e",
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {
            id: '1a',
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {   id: "2b",
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {
            id: "3e",
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
    ];


    return(
        <main className={styles.main}>
            <div className={styles.mainContainer}>
                <div className={styles.mainNavigation}>
            <Navigation/>
            <DropdownMenu/>
                </div>
            <h3 className={styles.totalMovies}>
                <span className={styles.totalNumber}>39</span> movies found
        </h3>
            <div className={styles.allMovies}>
                {movieList.map(({title, year, description, id})=>{
                    return <MovieCard title={title} year={year} description={description} key={id}/>
                })}

            </div>
            </div>
        </main>
    )
}