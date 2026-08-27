import "./styles.css";
import {homepage} from "./home.js";
import {menupage} from "./menu.js";

console.log("Hi! I'm working!");

const home = document.querySelector('#home-btn');
const menu = document.querySelector('#menu-btn');

home.addEventListener('click', homepage);
menu.addEventListener('click', menupage);
