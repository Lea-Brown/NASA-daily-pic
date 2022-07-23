function getFetch() {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.hdurl
            document.querySelector('p').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

getFetch()