import axios from "axios";
import { toast } from "react-toastify"

const apiEndpoint = process.env.REACT_APP_API_URL + '/file';

export const getProject = async (id) => {
    try {
        const project = await axios.get(apiEndpoint + '/' + id)
        return project.data.file
    } catch (err) {
        toast.error('File not found.')
        return { body: {}}
    }
}

export const adjust = (sec, timeAdjust, interval) => {
    if (sec < timeAdjust) {
        return 0;
    }
    return Math.floor((sec - (timeAdjust - 1)) / interval);
}