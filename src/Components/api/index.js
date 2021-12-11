import axios from "axios";

const URL = 'https://deploy-server-123.herokuapp.com';

export const fetchPosts = () => axios.get(`${URL}/posts`);
