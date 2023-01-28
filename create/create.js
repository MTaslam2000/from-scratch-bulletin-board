import { addPost } from '../fetch-utils.js';

const newPostEL = document.querySelector('.new-post-form');

newPostEL.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(newPostEL);
    const formDataObject = { title: formData.get('title'), message: formData.get('message') };

    // await addPost(formData.get('title'), formData.get('message'));
    console.log(formDataObject);
});