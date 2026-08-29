import { gsap } from "gsap";

const container = document.querySelector('#content');

//adding the home contents
function menupage() {
    container.innerHTML = '';

    const menuTemplate = `
        <div id="menu-container">
            <div id="menu-1">
                <h4>Tapsilog</h4>
                <p>Pan-fried beef tapa served with garlic fried rice and egg</p>
                <hr>
            </div>
            <div id="menu-2">
                <h4>Longsilog</h4>
                <p>Longganisa sausages served with garlic fried rice and egg</p>
                <hr>
            </div>
            <div id="menu-3">
                <h4>Tocilog</h4>
                <p>Sweet-savory flavor of the sweetened and cured pork belly in a saltpeter mixture served with garlic fried rice and egg</p>
                <hr>
            </div>
            <div id="menu-4">
                <h4>Bangsilog</h4>
                <p>Butterflied and fried marinated boneless milkfish served with garlic fried rice and egg</p>
                <hr>
            </div>
            <div id="menu-5">
                <h4>Cornsilog</h4>
                <p>Garlic fried rice paired with pan-fried corned beef with some diced potatoes and onions thrown in</p>
                <hr>
            </div>
            <div id="menu-6">
                <h4>Hotsilog</h4>
                <p>Pan-fried hotdogs served with garlic fried rice and egg</p>
                <hr>
            </div>
            <div id="menu-7">
                <h4>Chicksilog</h4>
                <p>Well, you guessed it right! Crispy fried chicken paired with the infamous garlic fried rice with egg</p>
                <hr>
            </div>
            <div id="menu-8">
                <h4>Porksilog</h4>
                <p>Crispy deep-fried pork loin served with garlic fried rice and egg</p>
                <hr>
            </div>
            
        </div>
    `
    container.innerHTML = menuTemplate;

    gsap.from(container.querySelectorAll('*'),{
        autoAlpha: 0,
        y: 10,
        x: 10,
        duration: 0.55,
        stagger: 0.08
    });
}

export {menupage};