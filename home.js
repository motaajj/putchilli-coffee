let one = document.querySelector(`.one`);
let two = document.querySelector(`.two`);
let three = document.querySelector(`.three`);
console.log(one);
console.log(two);
console.log(three);

let imgs = [one.src,two.src,three.src];
let num = 0;
function changeImges (){
    if(num < imgs.length){
        one.src = imgs[num];
        num++
       
    } else if (num == imgs.length){
     num = 0;
    }
}
setInterval(changeImges,4000);


let shop = document.querySelectorAll(`li`)[1];

shop.onclick = function (){
    location.href = `./hotdrinks.html`;
}



document.querySelector(`#About`).onclick = function (){
    console.log(`flf;lf`)
    location.href = `./aboutas.html`
}

document.querySelector(`button`).onclick = ()=>{
    location.href = `./hotdrinks.html`
}

document.getElementById(`Location`).onclick = () =>{
    
    location.href = `https://www.google.com/maps`;
}