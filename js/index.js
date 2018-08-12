// LOADING HTML DATA:
// get the references to container and button
const container = document.querySelector(".content");
const btn = document.querySelectorAll("li");
let url = "./content/contenthome.html";

fetch(url)
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        container.innerHTML = data;
    })
    .catch(function(error) {
        console.log(error.message);
    });

//Load content from Homepage
function handleClick(e) {
    e.preventDefault();
    if (e.target.textContent === "Home") {
        url = "./content/contenthome.html";

        fetch(url)
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                container.innerHTML = data;
            })
            .catch(function(error) {
                console.log(error.message);
            });

//Load content from Portfolio page       
    } else if (e.target.textContent === "Portfolio") {
        url = "./content/contentportfolio.html";

        fetch(url)
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                container.innerHTML = data;
            })
            .catch(function(error) {
                console.log(error.message);
            });

    }
}

// register btn for click event
for (var a = 0; a < btn.length; a++) {
    btn[a].addEventListener("click", handleClick);
}