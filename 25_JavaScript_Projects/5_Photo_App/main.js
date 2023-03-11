const urlalbums = 'https://jsonplaceholder.typicode.com/albums';
const urlphotos = 'https://jsonplaceholder.typicode.com/photos';
const urlusers = 'https://jsonplaceholder.typicode.com/users';

Promise.all([
    fetch(urlalbums),
    fetch(urlphotos),
    fetch(urlusers)
])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => {
        //console.log('Example payloads for development:',data[0][0], data[1][0], data[2][0])
        const inputData = data[1].sort(() => Math.random() - 0.5).map(photo => {
            const { albumId, ...rest } = photo;
            const { userId } = data[0].find(album => album.id === albumId);
            const { name, username, email, website } = data[2].find(user => user.id === userId);
            const user = { 'id': userId, name, username, email, website }
            var liked = Math.random() < 0.5;
            return { ...rest, user, liked }
        })
        console.log('Example post payload for development:',inputData[0]);
        var posts = '';
        inputData.forEach(element => {
            posts = `${posts}<div class="post">
        <div class="fullname">
        <a href=${element.user.website} target="_blank">${element.user.name}</a>
        </div>
        <img loading="lazy" src=${element.url} alt="post-${element.id}" class="picture" data-liked="${element.liked}" id="image-${element.id}" ondblclick="like(${element.id},${element.liked})" />
        <div class="content">
        <div id="like-${element.id}" data-liked="${element.liked}" class="like">
        ${element.liked ? `<i class="fa fa-heart fa-lg" onclick="like(${element.id},${element.liked})" aria-hidden="true"></i>` : `<i class="fa fa-heart-o fa-lg" onclick="like(${element.id},${element.liked})" aria-hidden="true"></i>`}
        </div>
        <div>
        <p><a href=${element.user.website} target="_blank">${element.user.username.toLowerCase()}</a> ${element.title}</p>
        </div>
        </div>
        </div>`
        });
        const feed = document.getElementById('feed');
        feed.innerHTML = posts;
        // This is the part where you would render something with your inputData:

    })
    .catch(error => {
        // Handle any errors that occur during the API request
        console.log(error)
        alert(`There was an error fetching the data`)
    });

function like(id, liked) {
    liked = !liked;
    console.log(id, liked)
    const heart = document.getElementById(`like-${id}`);
    const image = document.getElementById(`image-${id}`);
    const like = document.getElementById(`like-${id}`)
    console.log(heart.innerHTML)
    like.onclick = `like(${id},${liked})`
    heart.innerHTML = liked ? `<i class="fa fa-heart fa-lg" onclick="like(${id},${liked})" aria-hidden="true"></i>` : `<i class="fa fa-heart-o fa-lg" onclick="like(${id},${liked})" aria-hidden="true"></i>`;
    heart.setAttribute('data-liked', `${liked}`)
    image.setAttribute('data-liked', `${liked}`)
    image.setAttribute('ondblclick', `like(${id},${liked})`)

}

function detectDoubleTapClosure() {
    let lastTap = 0;
    let timeout;
    return function detectDoubleTap(event) {
        const curTime = new Date().getTime();
        const tapLen = curTime - lastTap;
        if (tapLen < 500 && tapLen > 0) {
            console.log('double tap')
            if (event.target.id.includes('image-')) {
                const id = event.target.id.slice(6);
                const liked = event.target.getAttribute('data-liked')
                like(id, liked === 'true');
            }
            event.preventDefault();
        } else {
            timeout = setTimeout(() => {
                clearTimeout(timeout);
            }, 500);
        }
        lastTap = curTime;
    };
}

/* Regex test to determine if user is on mobile */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.addEventListener('touchend', detectDoubleTapClosure());
}