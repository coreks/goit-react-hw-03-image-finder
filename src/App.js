import React from 'react';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
// import ImageGalleryItem from './components/ImageGalleryItem/';
// import Loader from './components/Loader/';
// import Button from './components/Button/';
// import Modal from './components/Modal/';
import './App.css';

class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        {/* <ImageGalleryItem />
      <Loader />
      <Button />
      <Modal /> */}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
