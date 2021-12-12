import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css'

function Details() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const selectedMovie = useSelector(store => store.selectedMovie);

    useEffect(() => {
       
    }, []);

    return (
        <main>
            <h1>{selectedMovie.title}</h1>
            <img src={selectedMovie.poster} alt={selectedMovie.title}/>
            <p>{selectedMovie.description}</p>
        </main>

    );
}

export default Details;