import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="Button">
      Load More
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
