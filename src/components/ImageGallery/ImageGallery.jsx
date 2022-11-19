import PropTypes from 'prop-types';
import Container from 'components/Container';
import ImageGalleryItem from '../ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled.js';

const ImageGallery = ({ items, onClick }) => {
  return (
    <Container as="main">
      <ImageGalleryList>
        {items.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            tags={tags}
            onClick={onClick}
            modalImage={largeImageURL}
          />
        ))}
      </ImageGalleryList>
    </Container>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
