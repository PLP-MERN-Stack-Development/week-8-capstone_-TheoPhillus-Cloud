// client/src/api/posts.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL; 
// e.g. VITE_API_URL=http://localhost:5000/api

export function fetchPosts() {
  return axios.get(`${BASE_URL}/posts`);
}

export function createPost(data) {
  return axios.post(`${BASE_URL}/posts`, data);
}

export function updatePost(slug, data) {
  return axios.put(`${BASE_URL}/posts/${slug}`, data);
}

export function deletePost(slug) {
  return axios.delete(`${BASE_URL}/posts/${slug}`);
}