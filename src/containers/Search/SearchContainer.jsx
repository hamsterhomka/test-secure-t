import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../components/Search/Search';
import { fetchSidebarRequest } from '../../actions/sidebarActions';

const DISTANCE_TO_LOAD_MORE = 150;

const SearchContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.search);
  const sidebarMovie = useSelector((state) => state.sidebarMovie);

  const loadMovieInSidebar = (event, id) => {
    event.preventDefault();
    dispatch(fetchSidebarRequest(id));
  };

  const handleScroll = ({ target }) => {
    if (!movies.isLoading) {
      if (target.scrollHeight - target.scrollTop - DISTANCE_TO_LOAD_MORE < target.clientHeight) {
        console.log('xxxxxxxxxxx');
      }
    }
  };

  return (
    <Search
      movies={movies}
      loadMovieInSidebar={loadMovieInSidebar}
      handleScroll={handleScroll}
      sidebarMovie={sidebarMovie}
    />
  );
};

export default SearchContainer;
