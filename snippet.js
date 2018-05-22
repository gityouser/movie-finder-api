const input = document.querySelector('#input');
const container = document.querySelector('#container');

input.addEventListener('input', (e) => pageReder(e.target.value));

let dataObj = fetch("https://jsonmock.hackerrank.com/api/movies/search/")
    .then(res => res.json())
    .then(data => dataObj = data)

    
async function pageReder(value) {
    const rawData = await dataObj
    const movies = 
        rawData.data
        .filter(obj => obj.Type === "movie")

    let filtered = movies
        .map(movie => movie.Title)
        .filter((title) => title.substring(0, value.length) === value)
    console.log(filtered);
}
