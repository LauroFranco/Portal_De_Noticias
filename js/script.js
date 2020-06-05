const BASE_URL = "http://newsapi.org/v2";
const API_KEY = "4f36b21d332344439d94abd94e670bb5";

let main = document.querySelector("main");

let ultimasNoticias = document.getElementById("ultimas");
let tcnologiaNoticias = document.getElementById("tec");

rodar("");
ultimasNoticias.addEventListener("click", () => {
    rodar("");
})

tcnologiaNoticias.addEventListener("click", () => {
rodar("technology")
})

function rodar(cat){
    if (cat!=null){cat=`category=${cat}&`}
    main.innerHTML =" ";
    fetch(`${BASE_URL}/top-headlines?${cat}country=br&apiKey=${API_KEY}`).then((Response) => Response.json()).then((dados) => {
        for (dado in dados.articles) {
            console.log(dados.articles[dado].urlToImage);
            main.innerHTML += `        
<div class="col-4">
  <div class="card"><img class="card-img-top"
      src="${ dados.articles[dado].urlToImage}">
    <div class="card-body">
      <h5 class="card-title">${dados.articles[dado].title} ES</h5>
      <p class="card-text">${dados.articles[dado].description} </p><a class="btn btn-primary"
      href="${dados.articles[dado].url}">Ir
      para noticia</a>
    </div>
  </div>
</div>`
        }
    });
}