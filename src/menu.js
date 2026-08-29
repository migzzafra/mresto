const container = document.querySelector('#content');

//adding the home contents
function menupage() {
    container.innerHTML = '';

    const tagline = "TAGLINE OF THE RESTO";
    const description = "This is where the description for the restaurant goes";

    const homeTemplate = `
        <div id="home-container">
            <h1>${tagline}</h1>
            <p>${description}</p>
            <button>"sea" the menu</button>
        </div>
    `
    container.innerHTML = homeTemplate;
}

export {menupage};