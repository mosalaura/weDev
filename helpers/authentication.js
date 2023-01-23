import { post } from './ajax.js';

function login(data, success, error) {
    post('/auth/login', data, success, error, false);
}

function logout() {
    localStorage.setItem('loginStatus', false);
    localStorage.setItem('authToken', null);
}

export { login, logout };