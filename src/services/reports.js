import { axiosInstance } from '../plugins/index.js'

export function getAllReports() {
    return axiosInstance.get("/");
}

export function getReport(id) {
    return axiosInstance.get(`/${id}`);
}

export function addReport(data) {
    return axiosInstance.post("/", data);
}

export function updateReport(id, data) {
    return axiosInstance.put(`/${id}`, data);
}

export function deleteReport(id) {
    return axiosInstance.delete(`/${id}`);
}
