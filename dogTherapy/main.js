var image = document.querySelector('.dog-image');

function fetchDog() {
    console.log('click registered')
    console.log(image);
    fetch('https://dog.ceo/api/breeds/image/random').then(Response => {
        return Response.json();
        console.log(Response.json())
    }).then(jsonResponse => {
        console.log('before', image.src); console.log(jsonResponse.message);
        image.src=jsonResponse.message;
        console.log('after', image.src);
    })
}

