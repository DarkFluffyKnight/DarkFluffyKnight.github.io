document.addEventListener("DOMContentLoaded", () => {
    // Grabs each image tab and stores them all in images
    const images = document.querySelectorAll("img");

    for (const image of images) {
        // console.log(image)

        // Open link
        fetch("https://dog.ceo/api/breeds/image/random")
        // Take the response and open the json file
        .then(response => response.json())
        // From the json file, set the image link to the message which contains the url
        // Then set height and width to 100px
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })

    }

})