import axios from 'axios';

const baseUrl = 'http://localhost:3030/api';

export const loginUser = async (user) => {
    try {
        const data = await axios.post(`${baseUrl}/user/login`, user);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const registerUser = async (user) => {
    try {
        const data = await axios.post(`${baseUrl}/user/register`, user);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getProducts = async () => {
    try {
        const data = await axios.get(`${baseUrl}/products`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getProductById = async (id) => {
    try {
        const data = await axios.get(`${baseUrl}/products/id/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getProductsByCategory = async (category) => {
    try {
        const data = await axios.get(`${baseUrl}/products/category/${category}`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const createProduct = async (product) => {
    try {
        const data = await axios.post(`${baseUrl}/products/`, product);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const updateProduct = async (id, product) => {
    try {
        const data = await axios.patch(`${baseUrl}/products/update/${id}`, product);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteProduct = async (id) => {
    try {
        const data = await axios.get(`${baseUrl}/products/delete/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
}