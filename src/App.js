import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import SelectedMovie from "./components/SelectedMovie";

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
    const filteredMovie = this.state.movies.filter((movie) => movie.id == id);
  };

  render() {
    const numberPages = Math.floor(this.state.results / 20);
    return (
      <div className="App">
        <SelectedMovie />
      </div>
    );
  }
}

export default App;
