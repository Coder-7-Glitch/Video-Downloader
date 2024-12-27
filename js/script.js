async function call() {
    let video = document.getElementById('url').value
    let videoId = video.slice(17, 28);
    console.log(videoId);
    

    const url = `https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=${videoId}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '77cd0395demshd239640bbf776f3p1c37d7jsnd9e1e23a6474',
            'x-rapidapi-host': 'youtube-media-downloader.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById("download-btn").innerHTML = `<a href="${result.videos.items[0].url}">download</a>`
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    // https://www.youtube.com/watch?v=0NFxcNheoLc&list=PLxGt-fKljQEV5R_isgnmdc-R8J3b6YxpQ
    // https://youtu.be/ymzAMSBMPSs?si=1rtdYCV_qjK5_DGm
}
document.getElementById('btn').addEventListener('click', call)