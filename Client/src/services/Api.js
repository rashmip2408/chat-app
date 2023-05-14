import axios from 'axios';

const url = 'http://localhost:5000';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log('Error while addUser API.', error.response.data);
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log('Error while calling getUser Api', error.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation Api', error.message);
    }
}

export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation Api', error.message);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newMessage Api', error.message);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getMessages Api', error.message);
    }
} 