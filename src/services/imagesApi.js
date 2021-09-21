import axios from 'axios';

const getImagesByAxios = axios.create({
  baseURL: 'https://pixabay.com/api',
  method: 'GET',
  params: {
    key: '22675248-9d53002fe5bb858ba3591edf9',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  },
});

const fetchImages = async (imageName, page) => {
  const {
    data: { hits },
  } = await getImagesByAxios(`/?q=${imageName}&page=${page}`);

  return hits;
};

export default fetchImages;
