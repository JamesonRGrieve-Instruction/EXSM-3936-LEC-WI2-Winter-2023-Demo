document.querySelector("button").addEventListener("click", (e) => { 
    fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
        .then(response => response.json())
        .then(json => {
            const jokeContainer = document.createElement("div");
            const joke = document.createElement("p");
            jokeContainer.appendChild(joke);
            if (json.type == "single")
            {
                joke.innerText = json.joke;
            }
            else if (json.type == "twopart")
            {
                joke.innerText = json.setup;
                const jokeButton = Object.assign(document.createElement("button"), {innerText: "Punchline!"});
                jokeButton.addEventListener("click", (e) => {
                    jokeContainer.appendChild(Object.assign(document.createElement("p"), {innerText: json.delivery}));
                    jokeButton.remove();
                });
                jokeContainer.appendChild(jokeButton);
            }
            else 
            {
                joke.innerText = "ERROR: API returned an unknown joke type.";
            }
            document.querySelector("main").appendChild(jokeContainer);
        });
});