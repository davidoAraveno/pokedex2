function funcionTipo(t){
    var tipos = [];
    for(var x = 0; x<t.length; x++){
        tipos.push(t[x]['type']['name'])
    };
    return tipos;
}

function funcionHabilidad(h){
    var habilidades = [];
    for(var a = 0; a<h.length; a++){
        habilidades.push(h[a]['ability']['name'])
    };
    return habilidades;
}

function funcionMovimiento(m){
    var movimientos = [];
    for(var d= 0; d<5; d++){
        movimientos.push(m[d]['move']['name']);
    };
    return movimientos;
}


fetch('https://pokeapi.co/api/v2/pokemon')
.then(res => res.json())
.then(data => {
    var contenido = document.getElementById("padre");
    contenido.addEventListener('click', function(event){
        infoPokemon(event.target.dataset.id)
    })

    for(var i=0; i<data['results'].length; i++){
        contenido.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data['results'][i]['name']}</h5>
            </div>
        </div>

        <input class="btn btn-primary" type="button" value="quiero saber mas de este pokemon" data-id="${i+1}">
        `
    }



});

function infoPokemon(id){
    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    .then(res => res.json())
    .then(data => {
        alert(`
        nombre: ${data['name']}
        tipo: ${funcionTipo(data['types'])}
        habilidades: ${funcionHabilidad(data['abilities'])}
        movimientos: ${funcionMovimiento(data['moves'])}
        `)

    })
}