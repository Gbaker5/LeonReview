
//const apiUrl = 'https://api.waifu.im/tags'


//nsfw: ["ass", "hentai", "milf", "oral", "paizuri", "ecchi", "ero"] (7)


//versatile: ["maid", "waifu", "marin-kitagawa", "mori-calliope", "raiden-shogun", "oppai", "selfies", "uniform"] (8)



const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
const params = {
  excludes_tags: ["maid", "waifu", "marin-kitagawa", "mori-calliope", "raiden-shogun", "oppai", "selfies", "uniform"],
  included_tags: ["hentai"]
};

//const queryParams = new URLSearchParams(params);
//const requestUrl = `${apiUrl}?${queryParams}`;

//fetch should be object literal and replace letter with input value
fetch(apiUrl)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        console.log(data.images[0])
        console.log(data.images[0].url)

            
           document.querySelector('img').src = data.images[0].url

    })
    .catch(err => {
        console.log(`error ${err}`)
    });