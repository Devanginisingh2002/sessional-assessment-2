document.querySelector('.btn').addEventListener('submit',(e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const searchValue = document.querySelector('#my-text').value
    const url = `https://jsonplaceholder.typicode.com/posts?title=${dataSearch}`
    xhr.open('GET',url, true);

    const array_name = [item1, item2, item3];

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            //console.log(response)

            let template = ''
            for(let i=0; i < response.items.length; i++) {
                template += `
                    <div class="video-items" style="width: 20%; margin: 1.2em;">
                        // <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank">
                        //     <img style="width: 100%" src="${response.items[i].snippet.thumbnails.high.url}" />
                        // </a>
                        <h5>${response.items[i].snippet.title}</h5>
                        <p style="color: gray">${response.items[i].snippet.description}</p>
                    </div>
                `
            }

            document.querySelector('#my-container').innerHTML = template
        }
    }

    xhr.send()
})


