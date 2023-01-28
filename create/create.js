import { addPost } from '../fetch-utils.js';

const newPostEl = document.querySelector('.new-post-form');
const homeButtonEl = document.querySelector('.home-button');

newPostEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(newPostEl);

    await addPost(formData.get('title'), formData.get('message'));
});
