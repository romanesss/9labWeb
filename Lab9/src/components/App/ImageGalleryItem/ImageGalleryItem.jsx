import React from 'react';

const ImageGalleryItem = ({ photo, onImgClick}) => {
  const { id, webformatURL, largeImageURL, tags} = photo;
  return(
    <li key={id} className="ImageGalleryItem">
      <img src={webformatURL} data-fullimg={largeImageURL} onClick={onImgClick} alt={tags} className="ImageGalleryItem-image" />
    </li>
  )
};

export default ImageGalleryItem;