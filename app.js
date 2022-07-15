const boton=document.getElementById("boton")




/*para cargar primero el documento */
document.addEventListener("DOMContentLoaded",()=>{
    const random=getRandomInt(1,601);
    fetchApi(random)
    
   console.log (random)
});

/*Generaar numero aleatoreo*/
const getRandomInt=(min,max)=>{
    return Math.floor(Math.random () *(max-min))+1;
}

/* llamamos la api de pokemon */
const fetchApi=async(id)=>{
    try{
        const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data=await res.json()

        /*aqui ponemos las direcciones de la imagen */
        const pokemon={
           
            imgCvg:data.sprites.other.dream_world.front_default,
           img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
           imgJuego: data.sprites.front_default,
           
            
            nombre:data.name,
            hp:data.stats[0].base_stat,
            experiencia: data.base_experience,
            ataque:data.stats[1].base_stat,
            tipo:data.types[0].type.name,
            defensa:data.stats[2].base_stat,
            defensaEspecial:data.stats[4].base_stat,
            ataqueEspecial:data.stats[3].base_stat,
            velocidad:data.stats[5].base_stat
            
                }



        pintarCard(pokemon)
        
       
    }catch (error){
        console.log(error)
    }
}


/*Aqui pintamos la tarjeta en el html*/
const pintarCard=(pokemon)=> {
    const main =document.querySelector(".main")      /*lugar donde se va a pintar nuestro temple*/ 
    const template=document.querySelector("#temple").content /*Capturamos nuestro temple*/
   const clone=template.cloneNode(true)    /*Copiamos todo lo que esta adentro del temple*/
    const fragment=document.createDocumentFragment()  /*Aqui pintamos la tarjeta en el html*/
   
    /*empezamos a remplazar los valores antiguos por los nuevo.*/
    //clone.querySelector('.victor').setAttribute('src', pokemon.imgCvg)f
    clone.querySelector("#l").setAttribute("src",pokemon.imgCvg)
    clone.querySelector(".nombre").innerHTML= `${pokemon.nombre} <h3>${pokemon.hp} hp</h3>  <h2 >${pokemon.experiencia} exp</h2>`
    clone.querySelector(".followers h3").innerHTML=`${pokemon.ataque}k`
    clone.querySelector(".like h3").innerHTML=`${pokemon.tipo}`
    clone.querySelector(".photos h3").innerHTML=`${pokemon.defensa}k` 
    clone.querySelector(".followers2 h3").innerHTML=`${pokemon.ataqueEspecial}k`
    clone.querySelector(".like2 h3").innerHTML=`${pokemon.defensaEspecial}k`
    clone.querySelector(".photos2 h3").innerHTML=`${pokemon.velocidad}k` 

     fragment.appendChild(clone)
     main.appendChild(fragment)

     
} 





boton.onclick=function(e){
location.reload();
console.log("hola mundo")

}






