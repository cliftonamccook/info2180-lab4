window.onload = () => {
    document.getElementsByTagName("input")[0].value = '';
    let button = document.getElementById("search-button");
    button.addEventListener("click", getSuperHeroes);
};

/*
// Exercise 2 - Display list of superheores in alert
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
}*/

// Exercise 3 - Search by name or alias
function getSuperHeroes(event) {
    event.preventDefault();
    let key = document.getElementsByTagName("input")[0].name;
    let value = document.getElementsByTagName("input")[0].value;
    let params = '?' + `${key}=${value}`;
    let url = "superheroes.php"+params;
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            return Promise.reject("Promise rejected");
        }
    })
    .then(data => {document.getElementById("result").innerHTML = data;})
    .catch(error => alert("There was an error: " + error));
}
