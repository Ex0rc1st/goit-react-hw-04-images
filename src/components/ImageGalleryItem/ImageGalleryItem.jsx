import { GalleryItem, ImageGallery } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, tags, onClick, modalImage }) => {
  return (
    <>
      <GalleryItem>
        <ImageGallery
          src={image}
          alt={tags}
          onClick={onClick}
          data-set={modalImage}
        />
      </GalleryItem>
    </>
  );
};

export default ImageGalleryItem;
