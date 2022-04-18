console.log(axios.get('AIzaSyDb8i-KBIL2qE_Q1KIrvG954OgzfyNBmv4'))
const youtubeKey='AIzaSyDb8i-KBIL2qE_Q1KIrvG954OgzfyNBmv4'
console.log(axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${youtubeKey}`))
