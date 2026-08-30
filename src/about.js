import { gsap } from 'gsap';

const container = document.getElementById('content');

function aboutpage() {
        container.innerHTML = '';
    
        const about = "ABOUT";
    
        const aboutTemplate = `
            <div id="about-container">
                <h1>${about}</h1>
                <p>Hi! I am Migz, a passionate self-taught beginner web developer, coder, a self-taught digital artist and no, this “about” page has nothing to do with the “SEALOG” website, haha. This is a submission for <span><a href="https://www.theodinproject.com/" target="_blank" class="the-odin-link">The Odin Project</a></span>’s exercises for webpack module bundler named Project: Restaurant Page.</p>
                <p>For years, I have been longing to pursue my dream — to become a developer that crafts beautiful websites and useful applications and now, finally, I am making that step. <span><a href="https://www.theodinproject.com/" target="_blank" class="the-odin-link">The Odin Project</a></span> is greatly assisting me with this movement of mine and so far, I am learning a lot whilst having a great time.</p>
                <p>I know it’s a long road ahead, and I will surely encounter thousands of bugs, errors, and frustrations along the way, but these won’t stop me from learning and creating more. So, for those chasing the same goals and dreams, I just want to say: start now and keep going. This really is a fun path.</p>
            </div>
        `
        container.innerHTML = aboutTemplate;
}

export {aboutpage};