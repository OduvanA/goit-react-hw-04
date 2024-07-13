
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import { fetchGallery } from '../../gallery-api';

import { useEffect, useState } from 'react'
import css from './App.module.css'

export default function App() {

  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);

  const handleSearch = (search) => {

    setGallery([]);
    setSearch(search);
  };

  useEffect(() => {
    if (search === "") {
      return;
    }
    async function getGallery() {
      try {
        const data = await fetchGallery(search);
        setGallery((currentGallery) => {
          return [...currentGallery, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        // setLoading(false);
      }
    }
  
      getGallery();
    }, [search]);


  
  return (
    <div className={css.container}>
      <LoadMoreBtn />
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <ImageModal />
    </div>

  )
}