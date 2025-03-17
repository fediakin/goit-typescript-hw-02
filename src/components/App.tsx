import "./App.css";
import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import { fetchImages } from "../services/api";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import { Images } from "./types";

Modal.setAppElement("#root");
const App = () => {
  const [images, setImages] = useState<Images[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [imageInsideModal, setImageInsideModal] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      if (!query) {
        return;
      }
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetchImages(query, page);
        setImages((prev) => [...prev, ...response.results]);
        setTotalPages(response.total_pages);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSearchSubmit = (searchValue: string): void => {
    setImages([]);
    setPage(1);
    setTotalPages(0);
    setQuery(searchValue);
  };
  const handleLoadMore = (): void => {
    setPage((prev) => prev + 1);
  };

  const handleOpenModal = (regularImageUrl: string): void => {
    setModalIsOpen(true);
    setImageInsideModal(regularImageUrl);
  };
  const handleCloseModal = (): void => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} handleOpenModal={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {page < totalPages && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
        imageInsideModal={imageInsideModal}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
