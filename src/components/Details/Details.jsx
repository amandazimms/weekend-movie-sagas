import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css'

function Details() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);
    const selectedMovie = useSelector(store => store.selectedMovie);

    useEffect(() => {
        dispatch({ type: 'FETCH_SELECTED_GENRES', payload: selectedMovie.id });
    }, []);

    return (
        <main>
            <h1>{selectedMovie.title}</h1>

            <img src={selectedMovie.poster} alt={selectedMovie.title}/>
            
            <h3>Genres:</h3>
            { genres.map(genre => 
                <div>
                <p>{genre.name}</p>
                </div>
            )}

            <h3>Description:</h3>
            <p>{selectedMovie.description}</p>
        </main>

    );
}

export default Details;