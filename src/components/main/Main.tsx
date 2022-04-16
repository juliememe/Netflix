import React from "react";
import {Navigation} from "../layout/navigation";
import {DropdownMenu} from "../ui-kit/dropdown-menu";
import {MovieCard} from "../layout/movie-card";
import styles from './Main.scss';
import {ErrorBoundary} from "../../utils/error-boundary";

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
            id: 'd4',
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {   id: "e5",
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {
            id: "f6",
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {
            id: 'g7',
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {   id: "h8",
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
        {
            id: "i9",
            title: 'Pulp Fiction',
            year: 2004,
            description: 'Action & Adventure'
        },
    ];


    return(
        <main className={styles.content}>
            <div className={styles.container}>
                <div className={styles.navigation}>
            <Navigation/>
            <DropdownMenu/>
                </div>
                <div className={styles.border}></div>
            <h3 className={styles.totalMoviesCount}>
                <span className={styles.totalNumber}>39</span> movies found
        </h3>
            <ErrorBoundary>
                 <div className={styles.allMovies}>
                     {movieList.map(({title, year, description, id})=>{
                         return <MovieCard title={title} year={year} description={description} key={id}/>
                     })}
                 </div>
            </ErrorBoundary>
            </div>
        </main>
    )
}