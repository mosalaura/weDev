import { get } from './ajax.js';

function getMe(success, error) {
    get('/users/me', {}, success, error, true);
}

export { getMe };