import { gsap } from "gsap";

const container = document.getElementById('content');

function contactpage() {
    container.innerHTML = '';
    
    const about = "MIGUEL AUGUSTINE ZAFRA";

    const contactTemplate = `
        <div id="contact-container">
            <h1>${about}</h1>
            <p class="email">Email: miguelaugustinezafra@gmail.com</p>
            <a class="social-links" href="https://www.linkedin.com/in/immgzz055" target="_blank"><p class="icon">LinkedIn </p><span class="username">Miguel Augustine Zafra</span></a>
            <a class="social-links" href="https://www.instagram.com/immgzz/" target="_blank"><p class="icon">IG </p><span class="username">immgzz</span></a>
            <a class="social-links" href="https://www.instagram.com/macz055/" target="_blank"><p class="icon">IG </p><span class="username">macz055</span></a>
            <a class="social-links" href="https://www.instagram.com/thecampingwool.art/" target="_blank"><p class="icon">IG </p><span class="username">The Camping Wool</span></a>
            <a class="social-links" href="https://www.artstation.com/macz55" target="_blank"><p class="icon">Artstation </p><span class="username">Miguel Zafra</span></a>
            <a class="social-links" href="https://www.artstation.com/thecampingwool_art" target="_blank"><p class="icon">Artstation </p><span class="username">The Camping Wool</span></a>
            <a href="https://www.behance.net/miguelzafra3">Behance</a>
        </div>
    `
    container.innerHTML = contactTemplate;

    document.querySelectorAll('.social-links').forEach(link => {
        const username = link.querySelector('.username');
        const tl = gsap.timeline({ paused: true });
  
        tl.to(username, {
            width: "auto",
            x: 10,
            opacity: 1,
            duration:0.3,
            ease: "power2.out"
        });
  
        link.addEventListener('mouseenter', () => tl.play());
        link.addEventListener('mouseleave', () => tl.reverse());
    });
}

export {contactpage};