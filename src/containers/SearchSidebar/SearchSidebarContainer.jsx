import React from 'react';
import { useSelector } from 'react-redux';
import SearchSidebar from '../../components/SearchSidebar/SearchSidebar';

const SearchSidebarContainer = () => {
  const movie = useSelector((state) => state.sidebarMovie);

  return (
    <SearchSidebar movie={movie} />
  );
};

export default SearchSidebarContainer;
