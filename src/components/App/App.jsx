
// import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchGallery } from '../../gallery-api';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react'
import css from './App.module.css'

export default function App() {

  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [page, setPage] = useState(1);
  let subtitle;
  const [isOpen, setIsOpen] = useState(false);
  const [bigImage, setBigImage] = useState("");
  // const [totalPages, setTotalPages] = useState(2);


  function openModal(value) {
    setBigImage(value);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  

  const handleSearch = (search) => {

    setGallery([]);
    setPage(1);
    setSearch(search);
    if (!search) {
      toast('Please enter your query', {
        duration: 2000,
        position: 'top-right',
      });
    }
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
          return [...currentGallery, ...data];
        });
        // setShowBtn(data.total_pages && data.total_pages !== page);
        // console.log(gallery.page, 5);

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  
      getGallery();
    }, [search, page]);

  
  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={gallery} openModal={openModal} />
      <Loader loader={loading} />
      {error && <ErrorMessage />}
      {gallery.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal isOpen={isOpen}
        imageUrl={bigImage}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}/>
      <Toaster/>
    </div>
  )
}