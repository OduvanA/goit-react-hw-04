
// import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchGallery } from '../../gallery-api';
import { useEffect, useState } from 'react'
import css from './App.module.css'

export default function App() {

  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [bigImage, setBigImage] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  function openModal(value) {
    setBigImage(value);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  

  const handleSearch = (search) => {
    setError(false);
    setGallery([]);
    setPage(1);
    setSearch(search);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    async function getGallery() {
      try {
        setLoading(true);
        const data = await fetchGallery(search, page);
        setGallery((currentGallery) => {
          return [...currentGallery, ...data.results];
        });
        setTotalPages(data.total_pages);
        setShowBtn(totalPages && totalPages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  
      getGallery();
    }, [search, page, totalPages]);

  
  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={gallery} openModal={openModal} />
      <Loader loader={loading} />
      {error && <ErrorMessage />}
      {showBtn && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      {isOpen && <ImageModal isOpen={isOpen}
        imageUrl={bigImage}
        onRequestClose={closeModal} />}
    </div>
  )
}