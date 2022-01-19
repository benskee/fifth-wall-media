import axios from "axios";

const apiEndpoint = process.env.REACT_APP_API_URL + "/users/";

export const register = user => {
    return axios.post(apiEndpoint + 'register', user);
}

export const deleteUser = async (user) => {
    await axios.delete(apiEndpoint + user, user)
}