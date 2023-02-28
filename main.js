const button = document.querySelector('button')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const body = document.querySelector('body')
const container = document.getElementById('container')
// const author = document.querySelector
const author1 = document.getElementById('author-pic')


button.addEventListener('click' , getQoute)

async function getQoute(){
    const response = await fetch('https://quotable.io/random')
    const data = await response.json()
    const qoute = data.content
    const author = data.author
    h1.innerText = qoute
    p.innerText = author
    console.log(author)
    var r = author ;
     let v = r.split(" "); 
     liveAuthor = v[0];
     console.log(liveAuthor)
     let demo1 = `https://source.unsplash.com/random/200×300/?${liveAuthor}`
    author1.style.backgroundImage = `url(${demo1})`
    console.log(author1.style.backgroundImage);
button.reset()
}

// setInterval(()=>{
//     getQoute()
// },5000)
function clickdemo(){
    document.querySelector('#start').style.display = "none"
    document.querySelector('#author-pic').style.display = "block"
    document.querySelector('#author-qoute').style.display = "block"
}


