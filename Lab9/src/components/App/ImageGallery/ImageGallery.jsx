import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ photos, onImgClick} ) => {
  return (
    photos.length > 0 &&
    (
    <div>
      <ul className="ImageGallery">
        {
            photos.map(photo => <ImageGalleryItem photo={photo} onImgClick={onImgClick}/>)
        }
      </ul>
    </div>
    )
  );
};

export default ImageGallery;