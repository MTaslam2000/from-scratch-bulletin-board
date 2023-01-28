/* Imports */
import { signIn, signUp, getPosts, getUser, logout } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

/* Get DOM Elements */
const loginButtonEl = document.querySelector('.login-button');
const createButtonEl = document.querySelector('.create-button');
const postListEl = document.querySelector('.post-container');


/* State */
let postsData = [];
/* Events */
window.addEventListener('load', async () => {
    const posts = await getPosts();
    postsData = posts;
    // call my display function here when its done
    postListEl.textContent = '';
    if (getUser()) {
        loginButtonEl.textContent = 'log out';
    }
    displayPosts();
});

loginButtonEl.addEventListener('click', async () => {
    if (getUser()) {
        await logout();
        loginButtonEl.textContent = 'login';
    } else {
        location.replace('./auth');
    }
});

createButtonEl.addEventListener('click', () => {
    location.replace('./create');
});

/* Display Functions */
function displayPosts() {
    for (let post of postsData) {

        const postEl = renderPost(post);
        postListEl.append(postEl);

    }
}

// (don't forget to call any display functions you want to run on page load!)
