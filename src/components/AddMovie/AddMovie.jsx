import React from 'react';
import './AddMovie.css';
export default class AddMovie extends React.Component {
  state = {
    show: false,
    movieName: '',
    img: '',
    rating: '',
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  emptyFields = () => {
    this.setState({ movieName: '', img: '', rating: '' });
  };
  render() {
    if (this.props.show) {
      return (
        <div className='modal'>
          <h1>MOVIE INFORMATIONS</h1>
          <label>Movie Name</label>
          <input
            name='movieName'
            className='inputs'
            type='text'
            value={this.state.movieName}
            onChange={this.handleChange}
          />
          <label>Image Url</label>
          <input
            name='img'
            className='inputs'
            type='text'
            value={this.state.img}
            onChange={this.handleChange}
          />
          <label>Rate (1-5)</label>
          <input
            name='rating'
            className='inputs'
            type='text'
            value={this.state.rating}
            onChange={this.handleChange}
          />
          <div>
            <button
              className='btn bg-green'
              onClick={() => {
                const movie = {
                  movieName: this.state.movieName,
                  img: this.state.img,
                  rating: this.state.rating,
                };
                this.props.addMovie(movie);
                this.emptyFields();
                this.props.hide();
              }}>
              Add
            </button>
            <button
              className='btn bg-red'
              onClick={() => {
                this.props.hide();
              }}>
              Cancel
            </button>
          </div>
        </div>
      );
    }
    return null;
  }
}
