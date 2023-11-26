const closeTrialCalloutBtn = document.querySelector(".close-trial-callout-btn");
const trialCallout = document.querySelector(".trial-callout");
const guideToggleBtn = document.querySelector('.guide-toggle-button');
const guideToggleArrow = document.querySelectorAll('.guide-toggle-arrow');
const guidePopup = document.querySelector('.guide-popup');


closeTrialCalloutBtn.addEventListener('click', () => { 
    trialCallout.classList.add('hidden');
})

guideToggleBtn.addEventListener('click', () => {
    guideToggleArrow.forEach(arrow => {
        arrow.classList.toggle('display-none');
    })

    guidePopup.classList.toggle('display-none');
})
