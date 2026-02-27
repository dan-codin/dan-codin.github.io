async function getPokemon(){
    let options =document.querySelectorAll('option');
    Array.from(options).forEach(tag=>{if(tag.innerHTML!=""){tag.remove()}})
    let pokemon = document.getElementById("name").value;
    let address = "https://pokeapi.co/api/v2/pokemon/"+pokemon;
    let pokemonObject;
    try{

        if(localStorage.getItem(pokemon) == null){
            await fetch(address).then(response=>response.json().then(data=>localStorage.setItem(pokemon, JSON.stringify(data))));
            pokemonObject = JSON.parse(localStorage.getItem(pokemon));
        }
        else{
            pokemonObject = JSON.parse(localStorage.getItem(pokemon));
        }
        
        let picture = document.getElementById("pokemonImage");
        picture.setAttribute("src",pokemonObject.sprites.front_default);
        let selectArr = document.querySelectorAll('select');
        let moveArray = pokemonObject.moves;
        let audio = document.getElementById('sound');
        audio.src = pokemonObject.cries.latest;
        
        let node;
        let sortedMovesArr=[];
        for(let i = 0; i < moveArray.length; i++){
            sortedMovesArr.push(moveArray[i].move.name); 
        }
        sortedMovesArr.sort();
        for(let selectElement of selectArr){
            for(let j = 0; j < moveArray.length; j++){
                node = document.createElement('option');
                node.innerHTML = sortedMovesArr[j];
                selectElement.appendChild(node);
             }
        }
    }
    catch{
        
    }
}
function addToTeam(){
    let main = document.getElementById('main');
    let imageSRC = document.getElementById("pokemonImage").src;
    let image = document.createElement('img');
    image.setAttribute('src', imageSRC)
    let skills = document.querySelectorAll('select option:checked');
    let list = document.createElement('ul');
    for(let skill of skills){
        let item = document.createElement('li');
        item.innerHTML = skill.value;
        list.appendChild(item);
    }
    let teamDiv = document.createElement('div');
    teamDiv.setAttribute('class', 'teams');
    teamDiv.appendChild(image);
    teamDiv.appendChild(list);
    main.appendChild(teamDiv);

}