/* Imports */
import { signIn, signUp, getPost, getPosts } from './fetch-utils.js';

/* Get DOM Elements */
const loginButtonEl = document.querySelector('.login-button');
const createButtonEl = document.querySelector('.create-button');

/* State */
let postsData = [];
/* Events */
window.addEventListener('load', () => {
    const posts = await getPosts();
    postsData = posts;
    // call my display function here when its done
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
