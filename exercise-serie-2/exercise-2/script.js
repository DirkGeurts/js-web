var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.punkapi.com/v2/beers', true)

request.onload = function () {
// Begin accessing JSON data here
var data = JSON.parse(this.response)


if (request.status >= 200 && request.status < 400) {
    data.forEach(beers => {
        // Log each beers name
        //console.log(beers.name)//
        //console.log(beers.description)//
        //achter console.log(semi colloms zetten)
        const row = document.getElementById("row-1")
        const card = document.createElement("div")
        // div gemaakt en in een variable gezet // // card.setAttribute("class", "card.........") //
        card.setAttribute("class", "card shadow d-flex align-items-center mt-5");

        // const moet je zzien als een map, waar je iets insteekt//
        const image = document.createElement("img")
        image.setAttribute("class", "class-img-top card-title pt-3 pb-3 rounded")
        image.src = beers.image_url;
        const cbody = document.createElement("div");
        cbody.setAttribute("class", "card-body d-flex justify-content-center flex-column text-center");
        const h3 = document.createElement("h3");
        h3.textContent = beers.name
        const h4 = document.createElement("h4");
        h4.textContent = beers.tagline;
        const p = document.createElement("p");
        p.textContent = beers.first_brewed;
        card.appendChild(image);
        row.appendChild(card);
        card.appendChild(cbody);
        cbody.appendChild(h3);
        cbody.appendChild(h4);
        cbody.appendChild(p);

    })
}

}
// Send request
request.send()