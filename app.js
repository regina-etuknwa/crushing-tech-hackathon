function app() {
    const allCloseTrialCalloutBtns = document.querySelectorAll(".close-trial-callout-btn");
    const trialCallout = document.querySelector(".trial-callout");

    const guideToggleBtn = document.querySelector('.guide-toggle-button');
    const guideToggleArrow = document.querySelectorAll('.guide-toggle-arrow');
    const guidePopup = document.querySelector('.guide-popup');

    const searchField = document.querySelector('.search-field');
    const searchBar = document.querySelector('.search-bar');

    const menuTrigger = document.querySelector('.menu-trigger');
    const menu = document.querySelector('.menu-content');
    const allMenuItems = document.querySelectorAll("[role='menuitem']");

    const notificationBtn = document.querySelector(".notification-btn");
    const notificationPopup = document.querySelector(".notification-popup");
    const notificationIcons = document.querySelectorAll(".notification-icon");

    const notificationWrapper = document.querySelector(".notification-wrapper");
    const menuWrapper = document.querySelector(".menu-wrapper");

    const allPopupCards = document.querySelectorAll(".popup-item");

    const allCheckboxes = document.querySelectorAll(".checkbox");

    const progressNum = document.querySelector(".progress-num");
    const progressBar = document.querySelector(".progress-bar");
    const progressBarFill = progressBar.querySelector(".progress-bar-fill");


    function closeMenu () {
        menuTrigger.attributes['aria-expanded'].value = "false";
        menuTrigger.focus();

        // console.log("closed menu");
    }

    function handleMenuEscapeKeypress (event) {
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

        allMenuItems.forEach((menuItem, menuItemIndex) => {
            menuItem.addEventListener('keyup', (event) => {
                handleMenuArrowKeypress(event, menuItemIndex);
                console.log(menuItemIndex);
            } )
        })

        // menu.addEventListener('focusout', (event) => {
    //     if (!menu.contains(event.relatedTarget) && event.relatedTarget !== menuTrigger) {
    //         toggleMenu();
    //       }
        
    // }
    // ); 
    }

    function toggleMenu () {
        const isExpanded = menuTrigger.attributes["aria-expanded"].value === "true";

        menu.classList.toggle('menu-active');

        if (isExpanded) {
            closeMenu();
            console.log("closed menu");
        } else {
            openMenu();
            console.log("opened menu");
        }

        // console.log("toggled menu");
    }

    function closeNotifications () {

        notificationBtn.attributes['aria-expanded'].value = "false";
        
        notificationBtn.focus();
    }

    function handleNotificationsEscapeKeypress (event) {

        if(event.key === "Escape"){
            toggleNotifications();
        }
    }

    // HELP!!!!!!
    // function handleNotificationTabKeypress(event, iconIndex) {
    //     // if on last icon, toggle back to first

    //     const isLastIcon = iconIndex === notificationIcons.length -1;
    //     const isFirstIcon = iconIndex === 0;
    //     const lastIcon = notificationIcons.item(notificationIcons.length -1);
    //     const nextIcon = notificationIcons.item(iconIndex + 1);
    //     const previousIcon = notificationIcons.item(iconIndex - 1);

    //     if (event.key === "Tab") {
            
    //         if (isLastIcon) {
    //             notificationIcons.item(0).focus();
    //             console.log("focus first icon");
                
    //         } else {
    //             notificationIcons.item(1).focus();
    //             console.log("focus last icon");
    //         }
    //     } 
    // }
    

    function toggleNotifications () {
        const isExpanded = notificationBtn.attributes["aria-expanded"].value === "true";
        notificationPopup.classList.toggle('notification-active');

        if (isExpanded) {
            closeNotifications();
            console.log("closed notifications");
        } else {
            openNotifications();
            console.log("opened notifications");
        }

    }

    function openNotifications () {

        notificationBtn.attributes['aria-expanded'].value = "true";
        notificationIcons.item(0).focus();

        
        
        notificationPopup.addEventListener('keyup', handleNotificationsEscapeKeypress);

        // tab key press attempt
        // console.log(notificationIcons);
        // notificationIcons.forEach((notificationIcon, iconIndex) => {
        //     notificationIcon.addEventListener("keyup", (event) => {
        //         event.preventDefault();
        //         handleNotificationTabKeypress(event, iconIndex);
        //         console.log(iconIndex);
        //         console.log(notificationIcon);
        //     }
        //      );
        // })
        
        // notificationPopup.addEventListener('focusout', (event) => {
        //     if (!notificationPopup.contains(event.relatedTarget) && event.relatedTarget !== notificationBtn) {
        //         toggleNotifications();
        //       }
            
        // }
        // );

    }

    function hideCardBody (card) {
        // hide popup-info, popup-img
        // change bg of popup-content to white
        const popupInfo = card.querySelector(".popup-info");
        const popupImg = card.querySelector(".popup-img");

        popupInfo.classList.add("display-none");
        popupImg.classList.add("display-none");
        card.classList.add("bg-white");

        // console.log(card);
    }

    function showCardBody (card) {
        // show popup-info, popup-img
        // reset styling

        const popupInfo = card.querySelector(".popup-info");
        const popupImg = card.querySelector(".popup-img");

        popupInfo.classList.remove("display-none");
        popupImg.classList.remove("display-none");
        card.classList.remove("bg-white");

        // console.log(card);
    }

    function handleMarkAsDone (checkbox) {
        const notCompletedIcon = checkbox.querySelector(".not-completed-icon");
        const loadingSpinnerIcon = checkbox.querySelector(".loading-spinner-icon");
        const completedIcon = checkbox.querySelector(".completed-icon");


        notCompletedIcon.classList.add("display-none");
        loadingSpinnerIcon.classList.remove("display-none");

        setTimeout(() => {
            loadingSpinnerIcon.classList.add("display-none");
            completedIcon.classList.remove("display-none");
            checkbox.ariaLabel = checkbox.ariaLabel.replace('as done', 'as not done');
        }, 500);

        checkbox.classList.add("checkbox-done");


    }

    function handleMarkAsNotDone (checkbox) {
        const notCompletedIcon = checkbox.querySelector(".not-completed-icon");
        const loadingSpinnerIcon = checkbox.querySelector(".loading-spinner-icon");
        const completedIcon = checkbox.querySelector(".completed-icon");

        completedIcon.classList.add("display-none");
        loadingSpinnerIcon.classList.remove("display-none");

        setTimeout(() => {
            loadingSpinnerIcon.classList.add("display-none");
            notCompletedIcon.classList.remove("display-none");
            checkbox.ariaLabel = checkbox.ariaLabel.replace('as not done', 'as done');
        }, 500);        

        checkbox.classList.remove("checkbox-done");


    }

    function handleMarkDoneOrNotDone (checkbox) {
        const markedAsDone = checkbox.classList.contains("checkbox-done");
        if(markedAsDone){
            handleMarkAsNotDone(checkbox);
        } else {
            handleMarkAsDone(checkbox)
        }

    }

    function updateProgress(){

        let progressCounter = 0;

        allCheckboxes.forEach(checkbox => {
            console.log(progressCounter);

            if (checkbox.classList.contains("checkbox-done")) {
                progressCounter++;
            }
        })

        progressNum.innerHTML = progressCounter;

        switch (progressCounter) {
            case 0:
                progressBarFill.attributes['width'].value = "0";
                break;
            case 1:
                progressBarFill.attributes['width'].value = "14.4";
                break;
            case 2:
                progressBarFill.attributes['width'].value = "28.8";
                break;
            case 3:
                progressBarFill.attributes['width'].value = "43.2";
                break;
            case 4:
                progressBarFill.attributes['width'].value = "57.6";
                break;
            case 5:
                progressBarFill.attributes['width'].value = "72";
                break;
            default:
                break;
        }


    }




    allCloseTrialCalloutBtns.forEach(button => {
        button.addEventListener('click', () => { 
        trialCallout.classList.add('hidden');
        })
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

    allPopupCards.forEach(card => {
        card.addEventListener('click', () => {
            allPopupCards.forEach((card) => {
                hideCardBody(card);
            });
            showCardBody(card);
        })
    })

    menuTrigger.addEventListener('click', toggleMenu);
    notificationBtn.addEventListener('click', toggleNotifications)

    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', (event) => {
            handleMarkDoneOrNotDone(checkbox);
            updateProgress();
        });
    })

}

app();


// how to close the menu by clicking elsewhere on the screen
// fix handleNotificationTabKeypress()
// open next card after marking check