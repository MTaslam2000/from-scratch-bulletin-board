/* Imports */
import { signIn, signUp, getPosts } from './fetch-utils.js';

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

    for (let post of postsData) {
        const postEl = document.createElement('div');
        const titleEl = document.createElement('p');
        const messageEL = document.createElement('p');

        titleEl.textContent = post.post_title;
        messageEL.textContent = post.message;

        postEl.append(messageEL, titleEl);

        postListEl.append(postEl);

    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
