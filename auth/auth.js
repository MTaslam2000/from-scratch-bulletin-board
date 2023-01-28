import { getUser, signUp, signIn, checkAuth, redirectIfLoggedIn, logout } from '../fetch-utils.js';

const signInForm = document.querySelector('#sign-in');
const signInEmail = document.querySelector('.sign-in-email');
const signInPassword = document.querySelector('.sign-in-password');

const signUpForm = document.querySelector('.sign-up');
const signUpEmail = document.querySelector('.sign-up-email');
const signUpPassword = document.querySelector('.sign-up-password');

// Wire up sign in and sign up forms to supabase
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);

    await signIn(data.get('email'), data.get('password'));
    location.href = '../';
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);

    await signUp(data.get('email'), data.get('password'));
    location.href = '../';
});

// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
redirectIfLoggedIn();