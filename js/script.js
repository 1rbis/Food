"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const parent_tabs = document.querySelector('.tabheader__items');
    const tabsContent = document.querySelectorAll('.tabcontent');

    let hideTabContent = () => {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');

        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    };

    let showTabContent = (i = 0) => {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    };
    hideTabContent();
    showTabContent(2);

    parent_tabs.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            hideTabContent();
            
            tabs.forEach((item, i) => {
                if (target == item) {
                    showTabContent(i);
                }
            });

        }
    });

        
});