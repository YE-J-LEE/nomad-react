import React, { Component } from "react";
import Movie from "../components/Movie";
import axios from "axios";
import "./Home.css";

class Home extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  // axios 될 때까지 기다렸다가 실행해라
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({
      movies: movies,
      isLoading: false
    });
  };

  // 최초 render()가 실행된 후에 자동으로 수행하는 함수
  componentDidMount() {
    /*
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 6000);
    */
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
