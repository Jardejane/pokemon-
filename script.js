let pages = 0
async function getAdvice() {
  const verificação = await fetch("https://pokeapi.co/api/v2/pokemon");

  const acessando = await verificação.json();

  acessando.results.forEach(async function (item) {
    const verificação_poke = await fetch(item.url);
    const acessando_poke = await verificação_poke.json();

    const discrição = await fetch(acessando_poke.species.url);
    const discrição_acessando = await discrição.json();
    //  console.log(discrição_acessando.flavor_text_entries[0].language.name)

    let text = "";

    for (let n = 0; n <= 200; n++) {
      if (discrição_acessando.flavor_text_entries[n].language.name === "en") {
        text = discrição_acessando.flavor_text_entries[n].flavor_text.replace(
          "",
          ""
        );
        break;
      }
    }

    //  console.log(acessando_poke)

    const types1 = acessando_poke.types[0].type.name;
    let types2 = "";
    try {
      types2 = acessando_poke.types[1].type.name;
    } catch (a) {
      types2 = "";
    }

    document.querySelector("#informações-pokemon").insertAdjacentHTML(
      "beforeend",
      `
        
      <section id= "configure">
      <div id= "test-cont">
       <div>

        <img
          class="imagem"
          src= ${acessando_poke.sprites.other["official-artwork"].front_default}
          alt="imagem-babasaulro"
        />
        </div>
         
         <div id="descrição">
          <h1 class="name"> ${acessando_poke.name} </h1>
          <p class="order"> id: ${acessando_poke.id}</p>
          <p class="types">${types1} ${types2}</p>
          <p class = "descri">descrição </p>
          <p class = "text"> ${text}</p>

        </div>
        </div>
        </section>
       `
    );
  });


}

getAdvice();

async function getButton(pages) {
  const verificação = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pages}&limit=50`);
     const acessando = await verificação.json();
    acessando.results.forEach(async function (item) {
    const verificação_poke = await fetch(item.url);
    const acessando_poke = await verificação_poke.json();

    const discrição = await fetch(acessando_poke.species.url);
    const discrição_acessando = await discrição.json();
    //  console.log(discrição_acessando.flavor_text_entries[0].language.name)

    let text = "";

    for (let n = 0; n <= 200; n++) {
      if (discrição_acessando.flavor_text_entries[n].language.name === "en") {
        text = discrição_acessando.flavor_text_entries[n].flavor_text.replace(
          "",
          ""
        );
        break;
      }
    }

    //  console.log(acessando_poke)

    const types1 = acessando_poke.types[0].type.name;
    let types2 = "";
    try {
      types2 = acessando_poke.types[1].type.name;
    } catch (a) {
      types2 = "";
    }

    document.querySelector("#informações-pokemon").insertAdjacentHTML(
      "beforeend",
      `
  
        <section id= "configure">
         <div>
  
          <img
            class="imagem"
            src= ${acessando_poke.sprites.other["official-artwork"].front_default}
            alt="imagem-babasaulro"
          />
          </div>
           
           <div id="descrição">
            <h1 class="name"> ${acessando_poke.name} </h1>
            <p class="order"> id: ${acessando_poke.id}</p>
            <p class="types">${types1} ${types2}</p>
            <p class = "descri">descrição </p>
            <p class = "text"> ${text}</p>
  
          </div>
  
         
          </section>
         `
    );
  });
}



 function paginação() {
  pages+=50;
  getButton(pages);

}





