import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  handleSelectedImage,
}) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => handleSelectedImage(largeImageURL, tags)}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  handleSelectedImage: PropTypes.func.isRequired,
};
