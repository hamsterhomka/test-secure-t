import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Search from '../../components/Search/Search';
import { fetchSidebarRequest } from '../../actions/sidebarActions';
import { doSearchFetch, setPage } from '../../actions/searchActions';

const DISTANCE_TO_LOAD_MORE = 500;

const SearchContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.search);
  const sidebarMovie = useSelector((state) => state.sidebarMovie);
  const { filterParams, searchQuery, page } = movies;
  const [searchContent, setSearchContent] = useState(null);

  useEffect(() => {
    if (searchContent) {
      searchContent.current.scrollTo(0, 0);
    }
  }, [filterParams, searchQuery]);

  useEffect(() => {
    if (searchContent) {
      if (page === 1) {
        searchContent.current.scrollTo(0, 0);
      }
    }
  }, [page]);

  const loadMovieInSidebar = (event, id) => {
    event.preventDefault();
    dispatch(fetchSidebarRequest(id));
  };

  const history = useHistory();

  const handleScroll = ({ target }) => {
    if (!movies.isLoading) {
      if (target.scrollHeight - target.scrollTop - DISTANCE_TO_LOAD_MORE < target.clientHeight) {
        dispatch(setPage(movies.page + 1));
        dispatch(doSearchFetch(history));
      }
    }
  };

  return (
    <Search
      movies={movies}
      loadMovieInSidebar={loadMovieInSidebar}
      handleScroll={handleScroll}
      sidebarMovie={sidebarMovie}
      setSearchContent={setSearchContent}
    />
  );
};

export default SearchContainer;
