import Axios from 'axios';

const USER_KEY = '12869228-73cd76dc98d567eb660c65443';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const PER_PAGE = '12';

const BASE_URL = "https://pixabay.com/api/?q=";

export const fetchPhotos = (query = 'girl', page = 1) =>
  Axios.get(`${BASE_URL}+${query}&key=${USER_KEY}&page=${page}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&per_page=${PER_PAGE}`)

