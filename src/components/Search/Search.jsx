import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import SearchHeader from '../SearchHeader/SearchHeader';
import PageContainer from '../PageContainer/PageContainer';
import './Search.scss';
import SearchSidebarContainer from '../../containers/SearchSidebar/SearchSidebarContainer';

const Search = ({
  movies, loadMovieInSidebar, handleScroll, sidebarMovie, setSearchContent,
}) => {
  const searchContent = useRef();
  setSearchContent(searchContent);

  return (
    <div className="Search">
      <div className="Search__content-wrapper">
        <div className="Search__left">
          <SearchHeader />

          <div className="Search__content" onScroll={handleScroll} ref={searchContent}>
            <PageContainer>
              {movies.movies.map((movie) => (
                <Card className="Search__card" key={movie.id}>
                  <Card.Body>
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                  </Card.Body>
                  <div className="Search__card-bottom">
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <div className="Search__card-row">
                          <span className="earch__card-row-item">Rating</span>
                          <span className="earch__card-row-item">{movie.vote_average}</span>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="Search__card-row">
                          <span className="earch__card-row-item">Release year</span>
                          <span className="earch__card-row-item">{new Date(movie.release_date).getFullYear()}</span>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link onClick={(event) => loadMovieInSidebar(event, movie.id)} href="#">More info</Card.Link>
                    </Card.Body>
                  </div>
                </Card>
              ))}
            </PageContainer>
          </div>
        </div>

        {sidebarMovie.id && (
          <SearchSidebarContainer />
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  movies: PropTypes.shape({
    movies: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }),
  loadMovieInSidebar: PropTypes.func.isRequired,
  handleScroll: PropTypes.func.isRequired,
  setSearchContent: PropTypes.func.isRequired,
  sidebarMovie: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    id: PropTypes.number,
  }),
};

Search.defaultProps = {
  movies: {
    error: null,
  },
  sidebarMovie: {
    error: null,
    id: null,
  },
};

export default Search;
