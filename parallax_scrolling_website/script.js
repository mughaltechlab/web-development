// elements
const title = document.querySelector('.title');
// images
const leaf1 = document.querySelector('.leaf1'); // left leaf
const leaf2 = document.querySelector('.leaf2'); //right leaf
const bush1 = document.querySelector('.bush1');
const bush2 = document.querySelector('.bush2');
const mount1 = document.querySelector('.mount1');
const mount2 = document.querySelector('.mount2');

// scroll event 
document.addEventListener('scroll',(e)=>{

    // lets create scroll value
    let val = window.scrollY;

    //* add margin style
    // title
    title.style.marginTop = val * 1.5 + 'px';
    // images
    leaf1.style.marginLeft = -val + 'px';
    leaf2.style.marginLeft = val + 'px';
    bush2.style.marginBottom = -val + 'px';
    mount1.style.marginBottom = -val * 1.1 + 'px';
    mount2.style.marginBottom = -val * 1.2 + 'px';
    
    console.log(title.style.marginTop);
});