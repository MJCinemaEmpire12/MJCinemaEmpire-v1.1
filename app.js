// ===============================
// MJ Cinema Empire V2.0
// Part 2A
// ===============================

// Demo Movies
const movies = [

{
title:"Avengers Endgame",
category:"Action",
rating:"8.9",
year:"2019",
thumbnail:"https://picsum.photos/300/450?random=1",
watch:"#",
trailer:"https://youtube.com",
download1:"#",
download2:"#",
download3:"#"
},

{
title:"Spider-Man No Way Home",
category:"Action",
rating:"8.5",
year:"2021",
thumbnail:"https://picsum.photos/300/450?random=2",
watch:"#",
trailer:"https://youtube.com",
download1:"#",
download2:"#",
download3:"#"
},

{
title:"John Wick 4",
category:"Action",
rating:"8.2",
year:"2023",
thumbnail:"https://picsum.photos/300/450?random=3",
watch:"#",
trailer:"https://youtube.com",
download1:"#",
download2:"#",
download3:"#"
}

];

const container=document.getElementById("movieContainer");

function loadMovies(list){

container.innerHTML="";

list.forEach(movie=>{

container.innerHTML+=`

<div class="movie-card">

<img src="${movie.thumbnail}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>⭐ ${movie.rating}</p>

<p>${movie.category} • ${movie.year}</p>

<br>

<a href="${movie.watch}" class="btn-red">

▶ Watch

</a>

<a href="${movie.trailer}" class="btn-dark">

🎬 Trailer

</a>

<br><br>

<a href="${movie.download1}" class="btn-red">

⬇ Server 1

</a>

<a href="${movie.download2}" class="btn-dark">

⬇ Server 2

</a>

<br><br>

<a href="${movie.download3}" class="btn-red">

⬇ Server 3

</a>

</div>

</div>

`;

});

}

loadMovies(movies);

// Live Search

const search=document.getElementById("searchMovie");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=movies.filter(movie=>

movie.title.toLowerCase().includes(value)

);

loadMovies(filtered);

});