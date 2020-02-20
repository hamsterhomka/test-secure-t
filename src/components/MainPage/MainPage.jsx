import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import './MainPage.scss';
import FilterPanelContainer from '../../containers/FilterPanel/FilterPanelContainer';
// import PropTypes from 'prop-types';

const MainPage = () => (
  <div className="MainPage">
    <PageContainer>
      <FilterPanelContainer className="MainPage__filter-panel" />
    </PageContainer>
  </div>
);

MainPage.propTypes = {};

export default MainPage;
