document.querySelectorAll('.faq-title').forEach((el) => {
    el.addEventListener('click', () => {
         let content = el.nextElementSibling;
         let lastEl = el.parentElement;
         console.log(content);
         console.log(lastEl);
         console.log(el);
            if(content.style.maxHeight == 0) {
                document.querySelectorAll('.drop-content').forEach((drop) => {
                    drop.style.maxHeight = null;
                 })
            content.style.maxHeight = content.scrollHeight + 'px';
            lastEl.style.height = 'auto';
            el.style.content = '-';
            } else document.querySelectorAll('.drop-content').forEach((drop) => {
                drop.style.maxHeight = null;
                lastEl.style.height = 52 + 'px';
             })
     })
})

const MENU_BURGER = document.querySelector('.burger');
MENU_BURGER.addEventListener('click', () => {
    let menuBurgerContent = document.querySelector('.menu-burger-content');
    if (menuBurgerContent.style.display !== 'flex'){
       console.log("Да");
        MENU_BURGER.src = "Media/Vector.png";
        menuBurgerContent.style.display = 'flex';
        document.querySelector("body").style.overflow = 'hidden';

        document.querySelectorAll('.menu-burger-content > a').forEach((el) => {
            el.addEventListener('click', () => {
                MENU_BURGER.src = "Media/Burger.png";
                menuBurgerContent.style.display = 'none';
                document.querySelector("body").style.overflow = 'visible';
            })
        })
    } else {
        console.log("Нет");
        MENU_BURGER.src = "Media/Burger.png";
        menuBurgerContent.style.display = 'none';
        document.querySelector("body").style.overflow = 'visible';
    }
});

const ANCHORS = document.querySelectorAll('a[href*="#"]')

for (let anchor of ANCHORS) {
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const BLOCK_ID = anchor.getAttribute('href')
        document.querySelector('' + BLOCK_ID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}