import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searched: "",
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
  render() {
    return (
      <div className="App">
        <Header />
        <Nav
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
