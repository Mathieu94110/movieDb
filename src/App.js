import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import Pagination from "./components/Pagination/Pagination";
import SelectedMovie from "./components/SelectedMovie/SelectedMovie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searched: "",
      results: 0,
      currentPage: 1,
      currentMovie: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=94544faaa7071b0d32d511d38e9439ec&query=${this.state.searched}`
    )
      .then((data) => data.json())
      .then(
        (data) => {
          console.log(data);
          this.setState({
            movies: [...data.results],
            results: data.total_results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };
  handleChange = (e) => {
    this.setState({
      searched: e.target.value,
    });
  };
  nextPage = (pageIndex) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=94544faaa7071b0d32d511d38e9439ec&query=${this.state.searched}&page=${pageIndex}`
    )
      .then((data) => data.json())
      .then(
        (data) => {
          console.log(data);
          this.setState({
            movies: [...data.results],
            currentPage: pageIndex,
            results: data.total_results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  viewMovieInfo = (id) => {
    const myMovie = this.state.movies.filter((movie) => movie.id == id);
    const newMovie = myMovie.length > 0 ? myMovie[0] : null;
    this.setState({
      currentMovie: newMovie,
    });
  };

  goToMenu = () => {
    this.setState({
      currentMovie: null,
    });
  };

  render() {
    const numberPages = Math.floor(this.state.results / 20);
    return (
      <div>
        {this.state.currentMovie == null ? (
          <>
            <Header />
            <Nav
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              style={{ position: "relative", zIndex: "1" }}
            />
            <MovieList
              movies={this.state.movies}
              viewMovieInfo={this.viewMovieInfo}
            />
          </>
        ) : (
          <SelectedMovie
            goToMenu={this.goToMenu}
            currentMovie={this.state.currentMovie}
          />
        )}
        {this.state.results > 20 && this.state.currentMovie == null ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
