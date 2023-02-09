const fetchButton = document.querySelector("button");

fetchButton.addEventListener("click", (e) => {
    console.log("Fetching!");
    // Fetch the data from this URL.
    fetch("https://randomuser.me/api/")
        // When we get a response, convert it to a JSON object.
        .then(response => response.json())
        // When the conversion is done...
        .then(json => {
            let name = `${json.results[0].name.title}. ${json.results[0].name.first} ${json.results[0].name.last}`;
            let picturePath = json.results[0].picture.medium;
            console.log(name);
            console.log(picturePath);
            // Do the stuff in this code block.
            const container = document.createElement("div");
            container.appendChild(Object.assign(document.createElement("p"), {innerText: name}));
            container.appendChild(Object.assign(document.createElement("img"), {src: picturePath}));
            document.querySelector("main").appendChild(container);
            console.log(json);
        });
});