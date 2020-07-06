const myBtn = document.getElementById('btn');
let input = document.getElementById('input');
let arr = [];

myBtn.addEventListener('click', ()=> {

    fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(data => data.json())
    .then(res => {
        res.map((val)=>{
            //values comes as an array
            input.innerHTML += `${val.title} <br>`
        })
     })
        .catch(err => console.log(err)) //if error occurs , output this
})
    