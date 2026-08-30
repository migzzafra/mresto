import "./styles.css";
import {homepage} from "./home.js";
import {menupage} from "./menu.js";
import { aboutpage } from "./about.js";
import { contactpage } from "./contact.js";
import { gsap } from "gsap";

console.log("Hi! I'm working!");

const home = document.querySelector('#home-btn');
const menu = document.querySelector('#menu-btn');
const about = document.querySelector('#about-btn');
const contact = document.querySelector('#contact-btn');
const logo = document.querySelector('#logo-element');

homepage();
logo.addEventListener('click', homepage);
home.addEventListener('click', homepage);
menu.addEventListener('click', menupage);
about.addEventListener('click', aboutpage);
contact.addEventListener('click', contactpage);
