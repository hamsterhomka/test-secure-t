import React from 'react';
import './PageContainer.scss';
import { childrenType } from '../../types/childrenType';

const PageContainer = ({ children }) => (
  <div className="PageContainer">
    { children }
  </div>
);

PageContainer.propTypes = {
  children: childrenType.isRequired,
};

export default PageContainer;
