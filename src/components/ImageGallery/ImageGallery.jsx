import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const KEY = '22675248-9d53002fe5bb858ba3591edf9';
const BASE_URL = 'https://pixabay.com/api';

class ImageGallery extends Component {
  state = {
    hits: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({ loading: true, hits: [] });

      fetch(`${BASE_URL}/?q=${this.props.imageName}&page=номер_страницы&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
      `)
        .then(r => r.json())
        .then(hits => this.setState(hits))

        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { hits, loading } = this.state;

    return (
      <>
        {loading && <div className="Loading"> Loading...</div>}
        {hits && (
          <ul className="ImageGallery">
            {hits.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ImageGallery;
