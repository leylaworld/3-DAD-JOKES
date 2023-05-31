const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "Ow050ekVy2rLnTgazqE0IQ==SdPbwD6s4Re7DunG";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
    try {
        jokeEl.innerText = "Updating..";
        btnEl.disabled = true;
        btnEl.innerText = "Loading..";
        const response = await fetch(apiURL, options)
        const data = await response.json();
        jokeEl.innerText = data[0].joke;
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

    } catch (error) {
        jokeEl.innerText = "Something went wrong";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error)
    }
}
/* function getJoke(){
    fetch(apiURL, options)
    .then(response => response.json())
    .then(data => jokeEl.innerText = data[0].joke)
} */
btnEl.addEventListener("click", getJoke);
