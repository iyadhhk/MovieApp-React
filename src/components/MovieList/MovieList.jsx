import React from 'react';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import Spinner from '../../Spinner';
function MovieList(props) {
  return (
    <div className='movie_List'>
      {props.movies.map((el, i) => (
        <MovieCard key={i} movie={el} />
      ))}
      <div className='newMovie'>
        <button
          className='addMovie'
          onClick={e => {
            props.mymodal();
          }}>
          +
        </button>
        <p className='movieName'>Add a New Movie</p>
      </div>
    </div>
  );
}

export default Spinner(MovieList);
