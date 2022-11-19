import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '29793920-75f6103355f31eb71a4495b72';
const FILTER_RESPONSE = `image_type=photo&orientation=horizontal`;

const getImage = async (page, query) => {
  const url = `?q=${query}&page=${page}&key=${API_KEY}&${FILTER_RESPONSE}&per_page=12`;
  const res = await axios.get(url);
  return res.data.hits;
};

export default getImage;
