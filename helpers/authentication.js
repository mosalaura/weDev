import { post } from './ajax.js';

function login(data, success, error) {
    post('/auth/login', data, success, error, false);
}

function logout() {
    localStorage.setItem('loginStatus', false);
    localStorage.setItem('authToken', null);
}

function register(data, success, error) {
    post('/auth/register', data, success, error, false);
}

export { login, logout, register };