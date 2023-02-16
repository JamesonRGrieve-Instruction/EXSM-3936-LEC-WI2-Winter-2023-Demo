const pokemonInput = document.querySelector("#pokemonInput");
let rendered;

document.querySelector("button").addEventListener("click", (e) => {
    // Fetch the data from this URL.
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.value}`)
        // When we get a response, convert it to a JSON object.
        .then(response => 
            {
                console.log(response.status);
                let toReturn;
                // If the response is JSON...
                if (response.headers.get("content-type").indexOf("application/json") !== -1)
                {
                    toReturn = response.json();
                }
                // If it's anything else (text, html, etc)...
                else
                {
                    toReturn = response.text();
                }
                return toReturn;
            })
        // When the conversion is done...
        .then(json => {
            console.log(json);
            if (rendered) 
            {
                rendered.remove();
            }
            const container = document.createElement("div");
            container.appendChild(Object.assign(document.createElement("img"), {src: json.sprites.front_default}));
            container.appendChild(Object.assign(document.createElement("p"), {innerText: `Species Name: ${json.species.name}`}));

            let type = json.types[0].type.name;
            if (json.types[1]) 
            {
                type += `, ${json.types[1].type.name}`;
            }          
            container.appendChild(Object.assign(document.createElement("p"), {innerText: `Type(s): ${type}`}));

            container.appendChild(Object.assign(document.createElement("p"), {innerText: `Weight: ${json.weight}`}));
            container.appendChild(Object.assign(document.createElement("p"), {innerText: `Height: ${json.height}`}));
            container.appendChild(Object.assign(document.createElement("p"), {innerText: `Base Experience: ${json.base_experience}`}));

            rendered = container;
            document.querySelector("main").appendChild(container);
        }).catch(error => {
            if (rendered) 
            {
                rendered.remove();
            }
            document.querySelector("main").appendChild(rendered = Object.assign(document.createElement("p"), {innerText: `${pokemonInput.value} was not found in the Pokemon database.`}));
        });
});


/*
Species Name - json.species.name
A Picture / Sprite json.sprites.front_default
Type Name(s) json.types (array)
Weight json.weight
Height json.height
Base Experience json.base_experience
*/