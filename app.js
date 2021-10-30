window.onload = () => {
    let button = document.getElementById("search-button");
    button.addEventListener("click", getSuperHeroes);
};

// Display list of superheores in alert
function getSuperHeroes(event) {
    event.preventDefault();
    let url = "superheroes.php";
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            return Promise.reject("Promise rejected");
        }
    })
    .then(data => {alert(data);})
    .catch(error => alert("There was an error: " + error));
}