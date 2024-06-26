// main dropdown function
function toggleMenu(header) {
    header.classList.toggle("active");
    var content = header.nextElementSibling;
    content.classList.toggle("active");
}

// nested dropdown
// -------------------------Badges--------------------------------------//
function toggleNestedMenu(header) {
    header.classList.toggle("active");
    var content = header.nextElementSibling;
    content.classList.toggle("active");
    // console.log(header.children[0]); // span nested-dropdown-title
    // console.log(header.nextElementSibling) // nested-dropdown-list
    // console.log(header.nextElementSibling.children) // nested-dropdown-items
    let spanTitle = header.children[0];
    const items = Array.from(header.nextElementSibling.children);
    items.forEach(item=>{
        item.addEventListener('click',(e)=>{
            const options = e.target.textContent;
            spanTitle.innerHTML = options
            console.log(options);
            header.classList.remove("active");
            content.classList.remove("active");
        })
    })
    console.log(spanTitle);

}

