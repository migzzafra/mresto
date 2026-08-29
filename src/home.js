import porksilog from './assets/porksilog.jpg'
const container = document.querySelector('#content');
import { menupage } from './menu.js';

//adding the home contents
function homepage() {
    container.innerHTML = '';

    const tagline = "A delectable Filipino cuisine at the sight of the briny blue sea";
    const description = "Enjoy the savory medley of garlic fried rice, fried egg, and protein of your choice.";

    const homeTemplate = `
        <div id="home-container">
            <div id="intro-holder">
                <h1>${tagline}</h1>
                <p>${description}</p>
                <button id="seamenu">"sea" the menu</button>
            </div>
            <div id="home-image-holder">
                <img src="${porksilog}" alt="Porksilog">
            </div>
        </div>
    `
    container.innerHTML = homeTemplate;

    const seaBtn = document.querySelector('#seamenu');
    seaBtn.addEventListener('click', menupage);
}

export {homepage};