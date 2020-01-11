import React from 'react';
import MovieList from './components/MovieList/MovieList';
import './App.css';
import AddMovie from './components/AddMovie/AddMovie';
import SearchField from './components/SearchBox/SearchField';
import SearchStars from './components/SearchStars/SearchStars';

class App extends React.Component {
  state = {
    rate: 0,
    searchText: '',
    movieTab: [
      {
        movieName: 'Fast & Furious (2019)',
        img:
          'https://img.yts.lt/assets/images/movies/fast_furious_presents_hobbs_shaw_2019/medium-cover.jpg',
        rating: 3,
      },
      {
        movieName: 'Into the Ashes (2019)',
        img:
          'https://img.yts.lt/assets/images/movies/into_the_ashes_2019/medium-cover.jpg',
        rating: 1,
      },
      {
        movieName: 'Joker (2019)',
        img: 'https://img.yts.lt/assets/images/movies/joker_2019/medium-cover.jpg',
        rating: 4,
      },
      {
        movieName: 'John Wick (2019)',
        img:
          'https://img.yts.lt/assets/images/movies/john_wick_chapter_3_parabellum_2019/medium-cover.jpg',
        rating: 2,
      },
      {
        movieName: 'Mile 22 (2018)',
        img: 'https://img.yts.lt/assets/images/movies/mile_22_2018/medium-cover.jpg',
        rating: 4,
      },
      {
        movieName: 'Pets 2 (2019)',
        img:
          'https://img.yts.lt/assets/images/movies/the_secret_life_of_pets_2_2019/medium-cover.jpg',
        rating: 5,
      },
      {
        movieName: 'The Irishman (2019)',
        img: 'https://img.yts.lt/assets/images/movies/the_irishman_2019/medium-cover.jpg',
        rating: 3,
      },
      {
        movieName: 'Spider-Man (2019)',
        img:
          'https://img.yts.lt/assets/images/movies/spider_man_far_from_home_2019/medium-cover.jpg',
        rating: 4,
      },
      {
        movieName: 'Triple Frontier (2019)',
        img:
          'https://img.yts.lt/assets/images/movies/triple_frontier_2019/medium-cover.jpg',
        rating: 5,
      },
      {
        movieName: 'Instant Family (2018)',
        img:
          'https://img.yts.lt/assets/images/movies/instant_family_2018/medium-cover.jpg',
        rating: 4,
      },
      {
        movieName: 'Creed II (2018)',
        img: 'https://img.yts.lt/assets/images/movies/creed_ii_2018/medium-cover.jpg',
        rating: 3,
      },
      {
        movieName: 'Mission Impossible (2018)',
        img:
          'https://img.yts.lt/assets/images/movies/mission_impossible_fallout_2018/medium-cover.jpg',
        rating: 2,
      },
      {
        movieName: 'The Equalizer 2 (2018)',
        img:
          'https://img.yts.lt/assets/images/movies/the_equalizer_2_2018/medium-cover.jpg',
        rating: 4,
      },
      {
        movieName: 'Sicario: Day of the Soldado (2018)',
        img:
          'https://img.yts.lt/assets/images/movies/sicario_day_of_the_soldado_2018/medium-cover.jpg',
        rating: 1,
      },
      {
        movieName: 'Maze Runner: The Death Cure (2018)',
        img:
          'https://img.yts.lt/assets/images/movies/maze_runner_the_death_cure_2018/medium-cover.jpg',
        rating: 4,
      },
      {
        movieName: 'Den of Thieves (2018)',
        img:
          'https://img.yts.lt/assets/images/movies/den_of_thieves_2018/medium-cover.jpg',
        rating: 2,
      },
      {
        movieName: 'How to Train Your Dragon (2019)',
        img:
          'https://img.yts.lt/assets/images/movies/how_to_train_your_dragon_the_hidden_world_2019/medium-cover.jpg',
        rating: 5,
      },
      {
        movieName: '6 Underground (2019)',
        img:
          'https://img.yts.lt/assets/images/movies/6_underground_2019/medium-cover.jpg',
        rating: 3,
      },
    ],
  };

  showHideModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  addMovie = movie => {
    this.setState({
      movieTab: [...this.state.movieTab, movie],
    });
  };

  searchWithRate = rating => {
    this.setState({ rate: rating });
  };
  searchWithName = text => {
    this.setState({ searchText: text });
  };

  render() {
    const movies = this.state.movieTab.filter(
      movie =>
        movie.movieName.toLowerCase().includes(this.state.searchText.toLowerCase()) &&
        movie.rating >= this.state.rate
    );
    return (
      <div className='app'>
        <div className='container'>
          <SearchField searchMovie={this.searchWithName} />
          <SearchStars search={this.searchWithRate} rate={this.state.rate} />
        </div>
        <MovieList mymodal={this.showHideModal} movies={movies} />
        <AddMovie
          show={this.state.show}
          hide={this.showHideModal}
          addMovie={this.addMovie}
        />
      </div>
    );
  }
}

export default App;
