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
            
       

            
            showTabContent(Array.from(tabs).indexOf(target))
            // tabs.forEach((item, i) => {
            //     if (target == item) {
            //         showTabContent(i);
            //     }
            // });


        }
    });


    //timer

    const end = new Date('2022-03-28');
    
    function calculateTime (end) {
        const start = new Date();
        const t = end - start;
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((t / (1000 * 60)) % 60);
        let seconds = Math.floor((t / 1000) % 60);
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function getZero (num) {
        if (num < 10) {
            num = '0' + num;
            return(num)
        } else {
            return num;
        }
    }
    
    function showTime (end) {
        const wrapTime = document.querySelector('.timer');
        const days = wrapTime.querySelector('#days');
        const hours = wrapTime.querySelector('#hours');
        const minutes = wrapTime.querySelector('#minutes');
        const seconds = wrapTime.querySelector('#seconds');
       
        let interval;
        
        renderTime();
        interval = setInterval(renderTime, 1000);
        function renderTime () {
            const t = calculateTime(end);
            if (t.total < 0) {
                clearInterval(interval);
                days.innerHTML = `00`;
                hours.innerHTML = `00`;
                minutes.innerHTML = `00`;
                seconds.innerHTML = `00`;
            } else {
                days.innerHTML = `${getZero(t.days)}`;
                hours.innerHTML = `${getZero(t.hours)}`;
                minutes.innerHTML = `${getZero(t.minutes)}`;
                seconds.innerHTML = `${getZero(t.seconds)}`;
            }

        }

        

    }
   
    showTime(end);



    //modal

    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-modal]');
    const modalClose = document.querySelector('[data-modal_close');



    function showModal () {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimer);

    }

    function hideModal () {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }


    modalBtn.forEach(element => {
        element.addEventListener('click', showModal);
    });
    modalClose.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => {
        if(e.target == modal){
            hideModal ();
        }
    });

    const modalTimer = setTimeout(showModal, 3000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal();
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    window.addEventListener('scroll', showModalByScroll);
});