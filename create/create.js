import { addPost } from '../fetch-utils.js';

const newPostEL = document.querySelector('.new-post-form');

newPostEL.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(newPostEL);

    await addPost(formData.get('title'), formData.get('message'));
});