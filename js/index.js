//HTML PARTIALS
//get the reference to the container
const container = document.querySelector(".container");
const errorContainer = document.querySelector(".error");
let url = "./contents/html-partials/page-1.html";
const links = document.querySelectorAll("nav a");

function handleLinkClick(ev) {
    ev.preventDefault();
    // find out which link is clicked
    let currentLink = ev.target;
    url = currentLink.href;
    handleAjax(url);
}

for (let link of links) {
    link.addEventListener("click", handleLinkClick);
}

function handleAjax(urlParam){
    fetch(urlParam)
        .then( function (response) {
            if (response.statusText === "OK") {
                return response.text();
            }
            throw new Error(response.statusText);
        })
        .then(function (data) {
            // use your partials

            container.innerHTML = data;
        })
        .catch(function (err) {
            errorContainer.textContent = `${err.name}: ${err.message}`;
        });
}
