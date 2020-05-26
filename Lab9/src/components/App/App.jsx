import React, { Component } from 'react';
import '../../css/style.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from "./Loader/Loader";
import Button from './Button/Button';
import Modal from './Modal/Modal';

import { fetchPhotos } from "../../services/photo-api";

export default class App extends Component {
  state = {
    photos: [],
    query: '',
    isLoading: false,
    page: 0,
    isModalOpen: false,
  }

  componentDidMount() {
    this.fetchForPhoto();
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page){
      this.fetchForPhoto(query,page);
    }
    //QUESTION why without if true doesn`t work?
    if (true){
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchForPhoto = (query, page) => {
    this.setState({
      isLoading: true,
    });
    fetchPhotos(query, page)
      .then(({ data }) => {
        this.setState( prevState =>{
          return{
            photos: [...prevState.photos, ...data.hits],
          }
        });
      })
      .catch(console.log)
      .finally(() => this.setState({ isLoading: false }));
  }

  onSubmit = (query) => {
    this.setState({ query: query, photos: [], page: 1  })
    this.fetchForPhoto(query);
  }

  onBtnClick = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1
      }
    });
  }

  onImgClick = (event) =>{
    const full = event.target.getAttribute("data-fullimg");
    this.setState({
      isModalOpen: true,
      fullImage: full,
    })
  }

  onBtnDeleteClick=e=>{
    this.setState((prevState) => ({
      photos: [...prevState.photos.slice(0, 1), ...prevState.photos.slice(1 + 1)]
    }))
    console.log('qfasf');
  }

  render() {
    const { onSubmit, onBtnClick, onImgClick, onBtnDeleteClick } = this;
    const { photos, isLoading, isModalOpen, fullImage } = this.state;
    return (
      <div className='App'>
        <Searchbar onSubmit={onSubmit} photos={photos} onBtnDeleteClick={onBtnDeleteClick}/>
        {
          isLoading
            ? <Loader />
            : <ImageGallery  photos={photos} onImgClick={onImgClick}/>
        }
        {
          photos.length > 0 && <Button type="button" text="Load more" onBtnClick={onBtnClick} />
        }
        {
          isModalOpen && <Modal fullImage={fullImage}/>
        }
      </div>
    )
  }
}
