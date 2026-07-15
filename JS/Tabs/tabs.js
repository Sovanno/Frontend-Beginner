'use strict';

const tabs = document.querySelectorAll('.tab');
const text = document.querySelector('.text');

const content = {
    'First Tab': 'Car Mechanic Simulator',
    'Second Tab': 'Scrap Mechanic',
    'Third Tab': 'My summer car',
    'Fourth Tab': 'The Long Drive'
};

const activeTab = document.querySelector('.tab.active');
if (activeTab) {
    text.textContent = content[activeTab.textContent];
};

tabs.forEach( tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        text.textContent = content[this.textContent];
    });
});
