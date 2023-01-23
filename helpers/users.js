import { get } from './ajax.js';

function getMe(success, error, redirect) {
    get('/users/me', {}, success, error, redirect);
}

export { getMe };