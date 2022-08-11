/* const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');

const xhr = new XMLHttpRequest();
const searchValue = document.querySelector('#my-text').value

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }


// const url = `https://jsonplaceholder.typicode.com`
}) */


/* document.querySelector('#search').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    const searchValue = document.querySelector('#my-text').value

    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAcrQM2Mk4xK9LcIMyos23bFFFxVEAjyXA&part=snippet&q=${searchValue}&maxResults=100`
    // const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBL7tmoBcFl44584VA4eC7RrVu_izPyyLM&part=snippet&q=${searchValue}&maxResults=50`

    xhr.open('GET', url) */

// Step 1
document.querySelector('#search').addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const searchValue = document.querySelector('#my-text').value
    const url = `https://jsonplaceholder.typicode.com/posts?${dataSearch}`
    xhr.open('GET',url, true)

    const implementValue = document.querySelector("#implement-value").value

        
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)

        }
        }
    })






