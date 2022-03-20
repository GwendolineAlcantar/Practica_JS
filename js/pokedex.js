const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName")
    let pokeInput = pokeName.value.toLowerCase()
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokeInput
    fetch(url).then((response) => {
        console.log(response);
        if (response.status != "200") {
            pokeImage('images/pokemon-sad.gif')
            pokeTipo("")
            pokeMovimiento("")
            pokeEstadistica("")
        } else {
            return response.json()
        }
    }).then((data) => {
        console.log(data)
        console.log(data.types[0].type.name)
        let pokeimg = data.sprites.front_default
        let poket = data.types[0].type.name
        let pokem = data.moves
        let pokee = data.stats
        pokeImage(pokeimg)
        pokeTipo(poket)
        pokeMovimiento(pokem)
        pokeEstadistica(pokee)
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("txt_img")
    pokeImg.src = url
}

const pokeTipo = (tipo) => {
    const pokeT = document.getElementById("txt_tipo")
    console.log(tipo);
    pokeT.innerHTML = tipo
}

const pokeMovimiento = (movimiento) => {
    const pokeT = document.getElementById("txt_movimiento")
    if (movimiento != "") {
        let movimientos = []
        for (let i = 0; i < 2; i++) {
            const element = movimiento[i];
            movimientos.push(element.move.name + "<br>")
        }
        pokeT.innerHTML = movimientos
    } else {
        pokeT.innerHTML = ""

    }
}

const pokeEstadistica = (estadistica) => {
    const pokeT = document.getElementById("txt_estadistica")
    if (estadistica != "") {
        let estadisticas = []
        for (let i = 0; i < 2; i++) {
            const element = estadistica[i];
            estadisticas.push("nombre:" + element.stat.name + " ataque: " + element.base_stat + "<br>")
        }
        pokeT.innerHTML = estadisticas
    } else {
        pokeT.innerHTML = ""
    }
}