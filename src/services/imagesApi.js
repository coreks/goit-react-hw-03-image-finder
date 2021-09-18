import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '22675248-9d53002fe5bb858ba3591edf9';

const fetchImages = async (imageName, page) => {
  const { data } = await axios.get(
    `/?q=${imageName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data.hits;
};

export default fetchImages;
