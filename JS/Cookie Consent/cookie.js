'use strict';

const acceptBtn = document.querySelector('#acceptBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const cookieBanner = document.querySelector('#cookieBanner');

const STORAGE_KEY = 'cookie_consent';
const CONSENT_VALUE = 'accepted';

cancelBtn.addEventListener( 'click', function() {
    cookieBanner.classList.add('hidden');
});

acceptBtn.addEventListener( 'click', function() {
    cookieBanner.classList.add('hidden');
    localStorage.setItem(STORAGE_KEY, CONSENT_VALUE);
});

function hasConsent() {
    if (localStorage.getItem(STORAGE_KEY) === CONSENT_VALUE) {
        cookieBanner.classList.add('hidden');
    } else {
        cookieBanner.classList.remove('hidden');
    };
};

document.addEventListener('DOMContentLoaded', hasConsent);
