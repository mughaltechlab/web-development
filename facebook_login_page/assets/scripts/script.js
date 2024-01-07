// buttons
const createAccBtn = document.querySelector(".create-btn");
const createAccCloseBtn = document.querySelector(".close-btn");
// gender radio button
const customBtn = document.getElementById('custom');
const maleBtn = document.getElementById('male');
const femaleBtn = document.getElementById('female');

// page
const createAccPage= document.querySelector(".signup-container");
// more options for custom gender
const moreOpt = document.querySelector('.visible-on-custom');


// event listeners
createAccBtn.addEventListener('click', showAccPage);
createAccCloseBtn.addEventListener('click', hideAccPage);
customBtn.addEventListener('click', showMoreOpt);
maleBtn.addEventListener('click', hideMoreOpt);
femaleBtn.addEventListener('click', hideMoreOpt);

// functions

// ---------create account page
// for display create account page
function showAccPage() {
        createAccPage.style.display = 'flex';
}

// for hide create account page
function hideAccPage() {
    createAccPage.style.display = 'none';
}
// ---------More Options for custon gender
// for display more option
function showMoreOpt() {
    moreOpt.style.display = 'flex';
}

// for hide more option
function hideMoreOpt() {
moreOpt.style.display = 'none';
}