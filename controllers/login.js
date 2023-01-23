import { getMe } from '../helpers/users.js';

getMe(data => {
    console.log(data)
}, error => {
    console.log(error)
})