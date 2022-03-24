import axios from "axios";
import { toast } from 'react-toastify';

const apiEndpoint = process.env.REACT_APP_API_URL + "/file";

export const getData = async () => {
    try {
        let fileData = await axios.get(apiEndpoint);
        return fileData.data.files
    } catch (err) {
        toast.error('Error retrieving files.')
    }
}
