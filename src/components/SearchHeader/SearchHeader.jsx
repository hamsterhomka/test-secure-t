import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import FilterPanelContainer from '../../containers/FilterPanel/FilterPanelContainer';

const SearchHeader = () => (
  <header className="SearchHeader">
    <PageContainer>
      <FilterPanelContainer />
    </PageContainer>
  </header>
);

export default SearchHeader;
