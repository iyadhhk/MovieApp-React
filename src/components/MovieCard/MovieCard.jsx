import React from 'react';
import './MovieCard.css';
export default function MovieCard(props) {
  const Rating = count => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < count) {
        stars.push(<span key={i}>★</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    return <span className='movieRating'>{stars}</span>;
  };
  return (
    <div className='moviecard'>
      <div className='rate'>{Rating(props.movie.rating)}</div>
      <img className='movie_img' src={props.movie.img} alt='' />
      <p className='movieName'>{props.movie.movieName}</p>
    </div>
  );
}
