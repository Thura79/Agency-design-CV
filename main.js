import './style.scss';
import './node_modules/bootstrap/dist/js/bootstrap';
import ScrollReveal from 'scrollreveal';

let left = {
    distance: '150%',
    origin: 'bottom',
    duration: 1000,
    // opacity: null
};

ScrollReveal().reveal('.left', left);

var right = {
    distance: '150%',
    origin: 'left',
    duration: 2000,
    // delay: 500,
    opacity: true
};

ScrollReveal().reveal('.right', right);


var topp = {
    distance: '150%',
    origin: 'bottom',
    interval: 260,
    duration: 2000,
    // easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 500
};

ScrollReveal().reveal('.topp', topp);

var network = {
    distance: '150%',
    origin: 'top',
    interval: 260,
    duration: 3000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 500, 
    rotate: {
        x: 150,
        z: 150
    }
};

ScrollReveal().reveal('.network', network);



