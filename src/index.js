import "./styles.css";
import {homepage} from "./home.js";
import {menupage} from "./menu.js";

console.log("Hi! I'm working!");

const home = document.querySelector('#home-btn');
const menu = document.querySelector('#menu-btn');
const logo = document.querySelector('#logo-element');

homepage();
logo.addEventListener('click', homepage);
home.addEventListener('click', homepage);
menu.addEventListener('click', menupage);

document.addEventListener('click', (e) => {
    if (e.target.id === 'seamenu') {
        menupage();
    }
});