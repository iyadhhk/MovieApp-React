import React from 'react';
import './SearchStars.css';
export default function SearchStars(props) {
  const searchRating = count => {
    let stars = [];
    for (let i = 1; i < 6; i++) {
      if (i <= count) {
        stars.push(
          <span key={i} onClick={() => props.search(i === count ? i - 1 : i)}>
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} onClick={() => props.search(i)}>
            ☆
          </span>
        );
      }
    }
    return <span className='stars'>{stars}</span>;
  };

  return <div>{searchRating(props.rate)}</div>;
}
