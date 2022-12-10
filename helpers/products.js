import { get } from './ajax.js';

function getPopular(success, error) {
    get('/products/popular', {}, success, error);
}

export { getPopular };