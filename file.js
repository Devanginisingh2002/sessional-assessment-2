document.querySelector('.btn').addEventListener('click',(e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const search_Value = document.querySelector('#search-text').value
    const url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
    xhr.open('GET',url, true);
    let template = '';


    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            const response = JSON.parse(xhr.responseText);
            // console.log(response)

            for(let i=0; i < response.length; i++) {
                template += `
                    <div class="video-items" style="width: 20%; margin: 1.2em;">

                        <p style="color: gray">${response[i].userid}</p>
                        <p style="color: gray">${response[i].id}</p>
                        <p style="color: gray">${response[i].title}</p>
                        <p style="color: gray">${response[i].body}</p>
                    </div>
                `
            }

            document.querySelector('#mycontainer').innerHTML = template 
        }
    }

    xhr.send()
})