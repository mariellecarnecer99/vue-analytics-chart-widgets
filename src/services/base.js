import axios from 'axios'

export function createAxiosInstance(apiUrl) {
    return axios.create({
      baseURL: apiUrl,
    });
  }