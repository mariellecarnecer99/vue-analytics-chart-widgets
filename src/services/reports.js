import { axiosInstance, accessToken } from '../plugins/index.js'

export function getAllReports() {
    const headers = { Authorization: `Bearer ${accessToken}` };
    return axiosInstance.get(`/`, { headers });
}

export function getReport(id) {
    const headers = { Authorization: `Bearer ${accessToken}` };
    return axiosInstance.get(`/${id}`, { headers });
}

export function addReport(data) {
    const headers = { Authorization: `Bearer ${accessToken}` };
    return axiosInstance.post(`/`, data, { headers });
}

export function updateReport(id, data) {
    const headers = { Authorization: `Bearer ${accessToken}` };
    return axiosInstance.put(`/${id}`, data, { headers });
}

export function deleteReport(id) {
    const headers = { Authorization: `Bearer ${accessToken}` };
    return axiosInstance.delete(`/${id}`, { headers });
}
