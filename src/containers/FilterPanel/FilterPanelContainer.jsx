import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { fetchFilterGenresRequest } from '../../actions/filterActions';
import {
  doSearchFetch, setFilterParams, setPage, setSearchQuery,
} from '../../actions/searchActions';

const FilterPanelContainer = ({ className }) => {
  const { genres } = useSelector((state) => state.filterPanel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilterGenresRequest());
  }, []);

  const [formState, setFormState] = useState({});
  const [query, setQuery] = useState('');

  const handleChange = ({ target }) => {
    setFormState((prevForm) => ({
      ...prevForm,
      [target.name]: target.value,
    }));
  };

  const handleQueryChange = ({ target }) => {
    setQuery(target.value);
  };

  const history = useHistory();

  const onSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(setPage(1));
    dispatch(setSearchQuery(query));
    dispatch(doSearchFetch(history));
    // dispatch(fetchSearchRequest(query, history));
  };

  const onFilterSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(setPage(1));
    dispatch(setFilterParams(formState));
    dispatch(doSearchFetch(history));
    // dispatch(fetchFilterSearchRequest(formState, history));
  };

  return (
    <FilterPanel
      className={className}
      genres={genres}
      handleChange={handleChange}
      onFilterSearchSubmit={onFilterSearchSubmit}
      onSearchSubmit={onSearchSubmit}
      handleQueryChange={handleQueryChange}
    />
  );
};

FilterPanelContainer.propTypes = {
  className: PropTypes.string,
};

FilterPanelContainer.defaultProps = {
  className: '',
};

export default FilterPanelContainer;
