export function renderPost(post) {
    const postEl = document.createElement('div');
    const titleEl = document.createElement('p');
    const messageEL = document.createElement('p');

    titleEl.textContent = post.post_title;
    messageEL.textContent = post.message;

    postEl.append(messageEL, titleEl);
    
    return postEl;
}