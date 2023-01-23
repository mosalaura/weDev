import { getPopular } from '../helpers/products.js';

getPopular(data => {
    console.log(data)
}, error => {
    console.log(error)
})

