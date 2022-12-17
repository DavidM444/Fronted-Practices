const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("nb");
    let nb = pokeNameInput.value;
    nb = nb.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nb}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./assets_pode/pk.gif")
        }
        else {
            return res.json();
        }
    })
    .then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            let PokeInfo = data.name
            let PokeTipe = data.types
            let PokeStatics = data.stats
            let PokeMove = data.moves

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
    Pokename.innerHTML=name
}

const poketype = (types) =>{
    let Poketype = document.getElementById("type-pokemon")
    let typepoke = types.map((item)=> item.type.name)
    Poketype.innerHTML = typepoke

}
const pokestatics = (stats) => {
    let pokestat = document.getElementById("pstat")
    let statics = stats.map((item)=> item.stat.name)
    pokestat.innerHTML = statics
}

const open_stat = document.getElementById("open_stat");
const v_stat = document.getElementById("v_stat");
const close_stat= document.getElementById("close_stat");

open_stat.addEventListener('click',()=>{
    v_stat.classList.add('show');
   
});

close_stat.addEventListener('click',()=>{
    v_stat.classList.remove('show');
})
const pokemovement = (moves) => {
    let pokemov = document.getElementById("pmodel")
    let movements = moves.map((item)=> item.move.name)
    pokemov.innerHTML = movements
}

const open = document.getElementById("open");
const v_modal = document.getElementById("v_modal");
const close = document.getElementById("close");

open.addEventListener('click',()=>{
    v_modal.classList.add('show'); 
});

close.addEventListener('click',()=>{
    v_modal.classList.remove('show');
})