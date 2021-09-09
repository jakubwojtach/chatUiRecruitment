import PropTypes from 'prop-types';

export const messageShape = {
    person: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
