const input = document.querySelector('#input');
const container = document.querySelector('#container');

input.addEventListener('input', (e) => pageReder(e.target.value));

let dataObj = fetch("https://jsonmock.hackerrank.com/api/movies/search/")
    .then(res => res.json())
    .then(data => dataObj = data)

    
async function pageReder(value) {
    if(container.children.length >= 0) {removeChildren(container)}     
    
    const rawData = await dataObj
    const movies = 
        rawData.data
        .filter(obj => obj.Type === "movie")

    let filteredMovies = movies
        .filter((movie) => movie.Title.substring(0, value.length).toLowerCase() === value.toLowerCase())

    filteredMovies.forEach(movie => createCards(movie))
    console.log(filteredMovies);
    console.log("Value length: ", value.length)
    if(value.length < 1) {removeChildren(container)}    
}
function removeChildren(node) {
    while(node.firstChild) {node.removeChild(node.firstChild)}
}
const createCards = (movie) => {
    
    let div = document.createElement('div')
    let img = document.createElement('img')
    console.log(movie)
    movie.Poster !== "N/A"
     ? img.src=movie.Poster
     : img.src="http://wonkville.net/wp-content/uploads/2016/04/No-image-available.jpg"

    container.appendChild(div)
    div.appendChild(img)
    img.style.cssText="width:100px; height:150px"
}


