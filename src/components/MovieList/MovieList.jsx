import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const setSelectedMovie = (movie) =>{
        dispatch( {type: 'SET_SELECTED_MOVIE', payload: movie});
    }

    return (
        <main>
            <h1>Movies</h1>

            <Link to="/add-movie">
                <button>Add New Movie</button>
            </Link>

            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            
                            <Link to="/details" onClick={() => setSelectedMovie(movie)}>
                                <button>
                                    <img src={movie.poster} alt={movie.title}/>
                                </button>
                            </Link>
                        </div>
                    );

                })}
            </section>
        </main>

    );
}

export default MovieList;