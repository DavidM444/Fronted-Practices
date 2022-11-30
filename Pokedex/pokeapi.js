const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("nb");
    let nb = pokeNameInput.value;
    nb = nb.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nb}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets_pode/pk.gif")
        }
        else {
            return res.json();
        }
    })
    .then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let PokeInfo = data.name
            let PokeTipe = data.types
            let PokeStatics = data.stats
            let PokeMove = data.moves

            console.log(PokeStatics)

            pokeImage(pokeImg);
            pokeinfo(PokeInfo);
            poketype(PokeTipe)
            pokestatics(PokeStatics)
            pokemovement(PokeMove)
           
            
        }
    });

    
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeimg");
    pokePhoto.src = url;
}

const pokeinfo  = (name) => {
    let Pokename = document.getElementById("name");
    
    console.log('hav full',Pokename)
    
    Pokename.innerHTML=name
}

const poketype = (types) =>{
    let Poketype = document.getElementById("type-pokemon")
    let typepoke = types.map((item)=> item.type.name)
    console.log('type', typepoke)
    Poketype.innerHTML = typepoke

}
const pokestatics = (stats) => {
    let pokestat = document.getElementById("info-statics")
    let statics = stats.map((item)=> item.stat.name)
    console.log('statics',statics)
    pokestat.innerHTML = statics


}
const pokemovement = (moves) => {
    let pokemov = document.getElementById("info-movement")
    let movements = moves.map((item)=> item.move.name)
    console.log('moves',movements)
    pokemov.innerHTML = movements


}

