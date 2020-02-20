import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './SearchSidebar.scss';

const SearchSidebar = ({ movie }) => (
  <div className="SearchSidebar">
    <Card>
      {movie.poster_path && (
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        />
      )}
      <Card.Body>
        <Card.Title>{movie.original_title}</Card.Title>
        {movie.tagline && <Card.Title>{movie.tagline}</Card.Title>}
        <Card.Text>{movie.overview}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <div className="Search__card-row">
            <span className="Search__card-row-item">Rating</span>
            <span className="Search__card-row-item">{movie.vote_average}</span>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <div className="Search__card-row">
            <span className="Search__card-row-item">Release date</span>
            <span className="Search__card-row-item">{movie.release_date}</span>
          </div>
        </ListGroupItem>
        { movie.runtime > 0 && (
          <ListGroupItem>
            <div className="Search__card-row">
              <span className="Search__card-row-item">Runtime</span>
              <span className="Search__card-row-item">{movie.runtime}</span>
            </div>
          </ListGroupItem>
        )}
        {movie.genres.length > 0 && (
          <ListGroupItem>
            {movie.genres.map((genre) => genre.name).join(', ')}
          </ListGroupItem>
        )}
      </ListGroup>
    </Card>
  </div>
);

SearchSidebar.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    runtime: PropTypes.number.isRequired,
  }),
};

SearchSidebar.defaultProps = {
  movie: {
    id: null,
  },
};

export default SearchSidebar;
