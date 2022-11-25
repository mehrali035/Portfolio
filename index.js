const hamburger = document.querySelector('.hamburger');
        const navList = document.querySelector('.navbar-lists');


        hamburger.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
