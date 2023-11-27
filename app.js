function app() {
    const closeTrialCalloutBtn = document.querySelector(".close-trial-callout-btn");
const trialCallout = document.querySelector(".trial-callout");
const guideToggleBtn = document.querySelector('.guide-toggle-button');
const guideToggleArrow = document.querySelectorAll('.guide-toggle-arrow');
const guidePopup = document.querySelector('.guide-popup');
const searchField = document.querySelector('.search-field');
const searchBar = document.querySelector('.search-bar');
const menuTrigger = document.querySelector('.menu-trigger');
const menu = document.querySelector('.menu-content');
const allMenuItems = document.querySelectorAll("[role='menuitem']");


// how to close the menu by clicking elsewhere on the screen

function closeMenu () {
    menuTrigger.attributes['aria-expanded'].value = "false";
    menuTrigger.focus();

    // console.log("closed menu");
}

function handleMenuEscapeKeypress (event) {
    // console.log("i work");
    
    if(event.key === "Escape"){
        toggleMenu();
    }
}

function handleMenuArrowKeypress (event, menuItemIndex) {

    const isLastMenuItem = menuItemIndex === allMenuItems.length -1;
    const isFirstMenuItem = menuItemIndex === 0;
    const lastMenuItem = allMenuItems.item(allMenuItems.length -1);
    const nextMenuItem = allMenuItems.item(menuItemIndex + 1);
    const previousMenuItem = allMenuItems.item(menuItemIndex - 1);
    
    if (event.key === "ArrowDown" || event.key === "ArrowRight"){
        if (isLastMenuItem){
            allMenuItems.item(0).focus();
        } else {
            nextMenuItem.focus();
        }
    }

    if (event.key === "ArrowUp" || event.key === "ArrowLeft"){
        if (isFirstMenuItem){
            lastMenuItem.focus();
        } else {
            previousMenuItem.focus();
        }
    }


}

function openMenu () {
    menuTrigger.attributes['aria-expanded'].value = "true";
    allMenuItems.item(0).focus();

    menu.addEventListener('keyup', handleMenuEscapeKeypress);
    // console.log("opened menu");

    allMenuItems.forEach((menuItem, menuItemIndex) => {
        menuItem.addEventListener('keyup', (event) => {
            handleMenuArrowKeypress(event, menuItemIndex);
        } )
    })

    // document.body.addEventListener('click', (event) => {
    //     const targetElement = event.target;
    //     // Check if the clicked element is outside the popup menu
    //     if (!menu.contains(targetElement)) {
    //       toggleMenu();
    //     }
    //   });
}

function toggleMenu () {
    const isExpanded = menuTrigger.attributes["aria-expanded"].value === "true";

    menu.classList.toggle('menu-active');
    
    if (isExpanded) {
        closeMenu();
    } else {
        openMenu();
    }

    // console.log("toggled menu");
}

closeTrialCalloutBtn.addEventListener('click', () => { 
    trialCallout.classList.add('hidden');
})

guideToggleBtn.addEventListener('click', () => {
    guideToggleArrow.forEach(arrow => {
        arrow.classList.toggle('display-none');
    })

    guidePopup.classList.toggle('display-none');
})

searchField.addEventListener('focus', () => {
    searchBar.classList.add('search-bar-focus');
})

searchField.addEventListener('blur', () => {
    searchBar.classList.remove('search-bar-focus');
})

menuTrigger.addEventListener('click', toggleMenu);

}

app();

