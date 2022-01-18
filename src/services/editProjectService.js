import axios from "axios";
import { toast } from 'react-toastify';

const apiEndpoint = process.env.REACT_APP_API_URL + '/file/';

export const getProject = async (id) => {
    try {
        const project = await axios.get(apiEndpoint + id);
        return project.data.file;
    } catch (err) {
        toast.error('File not found.')
    }
};

export const updateProject = async (id, data) => {
    await axios.put(apiEndpoint + id, data)
}

export const deleteProject = async (id) => {
    await axios.delete(apiEndpoint + id)
}