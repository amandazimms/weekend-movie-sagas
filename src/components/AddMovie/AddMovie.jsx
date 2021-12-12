import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddMovie.css'

function AddMovie() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    return (
        <main>
            <h1>Add New Movie</h1> 
        </main>

    );
}

export default AddMovie;