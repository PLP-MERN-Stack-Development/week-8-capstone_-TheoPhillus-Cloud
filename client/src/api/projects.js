// client/src/api/projects.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export function fetchProjects() {
  return axios.get(`${BASE_URL}/projects`);
}

export function createProject(data) {
  return axios.post(`${BASE_URL}/projects`, data);
}

export function updateProject(slug, data) {
  return axios.put(`${BASE_URL}/projects/${slug}`, data);
}

export function deleteProject(slug) {
  return axios.delete(`${BASE_URL}/projects/${slug}`);
}