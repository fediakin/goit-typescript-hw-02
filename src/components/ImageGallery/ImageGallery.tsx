import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Images } from "../types";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Images[];
  handleOpenModal: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  handleOpenModal,
}) => {
  return (
    <ul className={s.list}>
      {images.map((image) => {
        return (
          <li
            className={s.item}
            key={image.id}
            onClick={() => handleOpenModal(image.urls.regular)}
          >
            <ImageCard src={image.urls.small} alt={image.alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
