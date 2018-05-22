const input = document.querySelector('#input');
const container = document.querySelector('#container');

input.addEventListener('input', (e) => pageReder(e.target.value));

let dataObj = fetch("https://jsonmock.hackerrank.com/api/movies/search/")
    .then(res => res.json())
    .then(data => dataObj = data)

    
async function pageReder(value) {
    if(container.children.length > 0) {container.innerHTML = ''} 
    const rawData = await dataObj
    const movies = 
        rawData.data
        .filter(obj => obj.Type === "movie")

    let filteredMovies = movies
        .filter((movie) => movie.Title.substring(0, value.length) === value)

    console.log(filteredMovies);
    filteredMovies.forEach(movie => createCards(movie))
}

const createCards = (movie) => {
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"
    container.appendChild(div)
    div.appendChild(img)
    div.innerHTML="MIMI"
}