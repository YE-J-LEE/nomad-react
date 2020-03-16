import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <img
          src={this.props.poster}
          alt={this.props.title}
          title={this.props.title}
        />
        <h3 className="movie__title">{this.props.title}</h3>
        <h5 className="movie__year">{this.props.year}</h5>
        <ul className="genres">
          {this.props.genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{this.props.summary.slice(0, 140)}...</p>
      </div>
    );
  }
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
