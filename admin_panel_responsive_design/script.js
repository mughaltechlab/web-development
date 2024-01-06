// const deskMenu = document.querySelector(".menu-btn-off");
// const closeBtn = document.querySelector(".close-menu");
const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".button-class");
btn.addEventListener('click',()=>{
    menu.classList.toggle('menu');
    // menu.classList.toggle('menu-btn-on');
    console.log('clicked');
    console.log(menu);
})


// closeBtn.addEventListener('click',()=>{
//     menu.classList.toggle('button-class');
//     // menu.classList.toggle('menu-btn-on');
//     console.log('clicked');
// })