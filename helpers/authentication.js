import { post } from './ajax.js';

function login(data, success, error) {
    post('/auth/login', data, success, error, false);
}

export { login };