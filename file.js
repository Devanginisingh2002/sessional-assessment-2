
document.querySelector('.btn').addEventListener('submit',(e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const searchValue = document.querySelector('#my-text').value
    const url = `https://jsonplaceholder.typicode.com/posts?title=${dataSearch}`
    xhr.open('GET',url, true);

    const name = ["username","id","title"];
    let username = "username";
    let id = "id";
    let title = "title";

    xhr.onreadystatechange = function () {
        if(xhr.status === 4 && xhr.readyState === 200) {
            const response = JSON.parse(xhr.responseText)
            // console.log(response)

        }   
            
        
        }
    })






