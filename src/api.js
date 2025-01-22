import axios from 'axios';

// Set the base URL using environment variables
const baseURL = process.env.REACT_APP_API_URL;
debugger
// Create an instance of axios with the base URL
const apiInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API function for `GET`, `POST`, `PUT`, `DELETE`, etc.
const api = async (method, url, data = {}) => {
  try {
    const response = await apiInstance({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    // Handle the error as required
    console.error('API Error:', error.response || error.message);
    throw error;
  }
};

// Function to perform POST request
export const post = (url, data) => api('POST', url, data);

// Function to perform PUT request
export const put = (url, data) => api('PUT', url, data);

// Function to perform PATCH request
export const patch = (url, data) => api('PATCH', url, data);

// Function to perform DELETE request
export const remove = (url) => api('DELETE', url);

// Function to perform GET request
export const get = (url) => api('GET', url);

