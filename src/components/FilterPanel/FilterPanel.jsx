import React from 'react';
import classNames from 'classnames';
import './FilterPanel.scss';
import PropTypes from 'prop-types';
import { Button, Col, Form } from 'react-bootstrap';

const FilterPanel = ({
  className, genres, handleChange, onFilterSearchSubmit, onSearchSubmit, handleQueryChange,
}) => {
  const cn = classNames(className, 'FilterPanel');

  return (
    <div className={cn}>
      <Form className="FilterPanel__block" onSubmit={onSearchSubmit}>
        <div className="FilterPanel__row">
          <Form.Control
            className="mr-2"
            type="text"
            placeholder="Поиск..."
            onChange={handleQueryChange}
          />
          <Button type="submit">Искать</Button>
        </div>
      </Form>

      <Form className="FilterPanel__block" onSubmit={onFilterSearchSubmit}>
        <Form.Row>
          <Col>
            <Form.Group controlId="filterFormGenre">
              <Form.Label>Жанр</Form.Label>
              {genres.isLoading ? (
                <div>Loading...</div>
              ) : (
                <Form.Control as="select" name="genre" onChange={handleChange}>
                  <option value="">Все жанры</option>
                  {genres.list.map((genre) => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                  ))}
                </Form.Control>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Год</Form.Label>
            <div className="FilterPanel__row">
              <Form.Control
                className="mr-2 text-center"
                name="yearFrom"
                type="text"
                placeholder="От"
                onChange={handleChange}
              />
              -
              <Form.Control
                className="ml-2 text-center"
                name="yearTo"
                type="text"
                placeholder="До"
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col>
            <Form.Label>Рейтинг</Form.Label>
            <div className="FilterPanel__row">
              <Form.Control
                className="mr-2 text-center"
                name="ratingFrom"
                type="text"
                placeholder="От"
                onChange={handleChange}
              />
              -
              <Form.Control
                className="ml-2 text-center"
                name="ratingTo"
                type="text"
                placeholder="До"
                onChange={handleChange}
              />
              <Button className="ml-2" type="submit">Искать</Button>
            </div>
          </Col>
        </Form.Row>
        <Form.Row className="mt-3">
          <Col className="d-flex justify-content-center" />
        </Form.Row>
      </Form>
    </div>
  );
};

FilterPanel.propTypes = {
  className: PropTypes.string,
  genres: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
  onFilterSearchSubmit: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  handleQueryChange: PropTypes.func.isRequired,
};

FilterPanel.defaultProps = {
  className: '',
  genres: {
    error: null,
  },
};

export default FilterPanel;
