import React from 'react';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchImages from './services/imagesApi';

import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Spinner from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    imageName: '',
    hits: [],
    page: 1,
    status: 'idle',
    selectedImage: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { imageName: prevImage, page: prevPage } = prevState;
    const { imageName: nextImage, page: nextPage } = this.state;

    if (prevImage !== nextImage || prevPage !== nextPage) {
      try {
        const { imageName, page } = this.state;

        this.setState({ status: 'pending' });

        const hits = await fetchImages(imageName, page);
        this.setState({ status: 'resolved' });

        if (hits.length === 0) {
          return toast.error(
            `Picture with the name ${imageName} is not in the catalog`,
          );
        }

        this.setState(prevState => ({ hits: [...prevState.hits, ...hits] }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } catch (error) {
        this.setState({ status: 'rejected' });
        console.error(error.message);
      }
    }
  }

  handleFormSubmit = imageName => {
    this.setState({ imageName, hits: [], page: 1 });
  };

  pageIncrement = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSelectedImage = (src, tags) => {
    this.setState({ selectedImage: { src, tags } });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: '' });
  };

  render() {
    const { hits, selectedImage, status } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {status === 'pending' && <Spinner />}

        {status === 'resolved' && (
          <ImageGallery
            hits={hits}
            handleSelectedImage={this.handleSelectedImage}
          />
        )}

        {hits.length > 0 && <Button onClick={this.pageIncrement} />}

        {selectedImage && (
          <Modal
            onClose={this.handleCloseModal}
            src={selectedImage.src}
            alt={selectedImage.tags}
          />
        )}

        <ToastContainer autoClose={2500} />
      </>
    );
  }
}

export default App;
