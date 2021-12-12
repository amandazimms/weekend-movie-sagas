import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './AddMovie.css'

function AddMovie() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    const [title, setTitle] = useState('');
    const [url, setURL] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

    const saveButton = () => {
        console.log('save');
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleURLChange = (event) => {
        setURL(event.target.value);
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    }

    return (
        <main>
            <h1>Add New Movie</h1> 
            <input placeholder='movie title' type='text' onChange={ (event) => handleTitleChange(event) }></input>
            <input placeholder='image ULR' type='text' onChange={ (event) => handleURLChange(event) }></input>
            <textarea placeholder='movie description' onChange={ (event) => handleDescriptionChange(event) }></textarea>
            <select name="genre-dropdown" id="genre-dropdown" onChange={ (event) => handleGenreChange(event) }>
                <option value="Adventure">Adventure</option>
                <option value="Animated">Animated</option>
                <option value="Biographical">Biographical</option>
            </select>
            <Link to="/">
                <button onClick={saveButton}>Save</button>
            </Link>

            <Link to="/">
                <button>Cancel</button>
            </Link>
        </main>

    );
}

export default AddMovie;