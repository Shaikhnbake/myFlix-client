import { string } from "prop-types";

export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';

export function setMovies(value){
    return {type: SET_MOVIES, value};
}

export function setFilter(value){
    return {type: SET_FILTER, value};
}

/** 
 * 
    {
        visibilityFilter: string,
        movies: [
            {title, description, image path }
            ...
        ]
    }
    
*/