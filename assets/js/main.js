// Show the Menu

// Defining a function named showMenu with two parameters: toggleId and navId

const showMenu = (toggleId, navId) => {

    // Getting the element with the ID specified by toggleId and assign it to the variable toggle
    // Getting the element with the ID specified by navId and assign it to the variable nav
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    // This validates if both - toggle and nav - elements exist
    if (toggle && nav) {
        // Adding a click event listener to the toggle element
        toggle.addEventListener('click', () => {
            // Toggle the 'show' class on the - nav - element
            nav.classList.toggle('show-menu');
        });
    }
}

// Call the showMenu function with the arguments 'nav-toggle' and 'nav-menu'
showMenu('nav-toggle', 'nav-menu');


// Remove the Menu on Mobile

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on each - nav__link -, we remove the show-menu class. 
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Sections Active Link

const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// Change Background Header

function scrollHeader(){
    const nav = document.getElementById('header')

//When the scroll is greater thaan 200 viewport height, add the scroll-header class to the header tag
if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// Show Scroll Top

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')

//When the scroll is greater thaan 560 viewport height

if (this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)
