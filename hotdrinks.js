let btn1 = document.querySelector(`.item-one`);
let btn2 = document.querySelector(`.item-two`);
let btn3 = document.querySelector(`.item-three`);


let coldDrink = document.querySelectorAll(".cold-drinks").forEach((e)=>{
  e.style.display = `none`;
})

let Sweets = document.querySelectorAll(".swwets").forEach((e)=>{
  e.style.display = `none`;
})

function one() {

  document.querySelectorAll(".cold-drinks").forEach((e)=>{
    e.style.display = `grid`;
  })

    document.querySelectorAll(".swwets").forEach((e)=>{
      e.style.display = `none`;
    })

    document.querySelectorAll(".hot-drinks").forEach((e)=>{
      e.style.display = `none`;
    })

    search.addEventListener(`keyup`, (e) => {
      let strings = e.target.value.toLowerCase();
      let label = document.querySelectorAll(`label`);
      label.forEach((label) => {
        if (label.textContent.toLocaleLowerCase().includes(strings)) {
    
          
        
          label.parentNode.style.display = `grid`;
          article.style.height = `100vh`;
          label.parentNode.parentNode.style.justifyContent = `center`;
          label.parentNode.style.marginRight = `10px`;

          document.querySelectorAll(".swwets").forEach((e)=>{
            e.style.display = `none`;
          })
        
          document.querySelectorAll(".hot-drinks").forEach((e)=>{
            e.style.display = `none`;
          })
          
        } else {
          label.parentNode.style.display = `none`;
    
          section.forEach((sec) => {
            sec.parentNode.style.alignItems = `flex-start`;
          });
        }
      });
    });

    
  
  btn1.style.backgroundColor = `transparent`;
  btn1.style.color = `white`;
  btn2.style.backgroundColor = ` rgb(255, 175, 63)`;
  btn3.style.backgroundColor = ` rgb(255, 175, 63)`;
  btn2.style.color = `black`;
  btn3.style.color = `black`;
  btn1.style.textShadow = `none`;
  btn2.style.textShadow = `  0 3px 3px  rgb(255, 253, 253)`;
  btn3.style.textShadow = ` 0 3px 3px  rgb(255, 253, 253)`;
  btn1.style.border = `solid 1px white`;

  
}

btn1.addEventListener(`click`, one);

function two() {

  document.querySelectorAll(".hot-drinks").forEach((e)=>{
    e.style.display = `grid`;
  })

  document.querySelectorAll(".cold-drinks").forEach((e)=>{
    e.style.display = `none`;
  })

  
  document.querySelectorAll(".swwets").forEach((e)=>{
    e.style.display = `none`;
  })

  search.addEventListener(`keyup`, (e) => {
    let strings = e.target.value.toLowerCase();
    let label = document.querySelectorAll(`label`);
    label.forEach((label) => {
      if (label.textContent.toLocaleLowerCase().includes(strings)) {
  
        
      
        label.parentNode.style.display = `grid`;
        article.style.height = `100vh`;
        label.parentNode.parentNode.style.justifyContent = `center`;
        label.parentNode.style.marginRight = `10px`;

        document.querySelectorAll(".swwets").forEach((e)=>{
          e.style.display = `none`;
        })
      
        document.querySelectorAll(".cold-drinks").forEach((e)=>{
          e.style.display = `none`;
        })
        
      } else {
        label.parentNode.style.display = `none`;
  
        section.forEach((sec) => {
          sec.parentNode.style.alignItems = `flex-start`;
        });
      }
    });
  });
  
  btn1.style.backgroundColor = `rgb(255, 175, 63) `;
  btn2.style.color = `white`;
  btn1.style.textShadow = `  0 3px 3px  rgb(255, 253, 253)`;
  btn2.style.textShadow = `none`;
  btn3.style.textShadow = ` 0 3px 3px  rgb(255, 253, 253)`;
  btn2.style.backgroundColor = `transparent `;
  btn2.style.border = `solid 1px white`;
  btn3.style.backgroundColor = ` rgb(255, 175, 63)`;
  btn1.style.color = `black`;
  btn3.style.color = `black`;
}

// transparent
// rgb(255, 175, 63)
btn2.addEventListener(`click`, two);

function three() {

  document.querySelectorAll(".hot-drinks").forEach((e)=>{
    e.style.display = `none`;
  })

  document.querySelectorAll(".cold-drinks").forEach((e)=>{
    e.style.display = `none`;
  })

  document.querySelectorAll(".swwets").forEach((s)=>{
    s.style.display = `grid`;
  })

  search.addEventListener(`keyup`, (e) => {
  let strings = e.target.value.toLowerCase();
  let label = document.querySelectorAll(`label`);
  label.forEach((label) => {
    if (label.textContent.toLocaleLowerCase().includes(strings)) {

      
   
      label.parentNode.style.display = `grid`;
      article.style.height = `100vh`;
      label.parentNode.parentNode.style.justifyContent = `center`;
      label.parentNode.style.marginRight = `10px`;

      document.querySelectorAll(".hot-drinks").forEach((e)=>{
        e.style.display = `none`;
      })
    
      document.querySelectorAll(".cold-drinks").forEach((e)=>{
        e.style.display = `none`;
      })
      
    } else {
      label.parentNode.style.display = `none`;

      section.forEach((sec) => {
        sec.parentNode.style.alignItems = `flex-start`;
      });
    }
  });
});


  btn1.style.backgroundColor = `rgb(255, 175, 63) `;
  btn2.style.backgroundColor = ` rgb(255, 175, 63)`;
  btn3.style.backgroundColor = `transparent`;
  btn3.style.color = `white`;
  btn3.style.border = `solid 1px white`;
  btn1.style.textShadow = ` 0 3px 3px  rgb(255, 253, 253)`;
  btn2.style.textShadow = ` 0 3px 3px  rgb(255, 253, 253)`;
  btn3.style.textShadow = `none`;
  btn1.style.color = `black`;
  btn2.style.color = `black`;
}

btn3.addEventListener(`click`, three);

let search = document.getElementById(`search`);
// let label = document.querySelectorAll(`label`);
let section = document.querySelectorAll(`section`);
let article = document.querySelector(`article`);
let buyButton = document.createElement(`button`);
buyButton.id = `buyButton`;
buyButton.textContent = `Contnue`;
buyButton.onclick = ()=>{
  location.href = `./buying.html`
}



let home = document.querySelectorAll(`.list`)[0];
home.onclick = function () {
  location.href = `./home.html`;
};

let buttons = document.querySelectorAll(`button`);
let cartLight = document.querySelectorAll(`.list`)[3];
let num = 0;
let indexNum = 0;


let cartitems = document.createElement(`div`);
document.body.appendChild(cartitems);
let text = document.createElement(`span`);
text.textContent = `YOUR CART`;
text.style.fontWeight = `bold`;
text.style.color = `white`;
text.style.fontSize = `30px`;
let totalPice = document.createElement(`span`);
totalPice.id = `totalPice`;
let priceNumber = /[0-9]/ig;



cartitems.appendChild(text);

cartLight.onclick = function () {
  cartitems.classList.toggle(`cartitems`);
};




search.addEventListener(`keyup`, (e) => {
  let strings = e.target.value.toLowerCase();
  let label = document.querySelectorAll(`label`);
  label.forEach((label) => {
    if (label.textContent.toLocaleLowerCase().includes(strings)) {

      
    
      label.parentNode.style.display = `grid`;
      article.style.height = `100vh`;
      label.parentNode.parentNode.style.justifyContent = `center`;
      label.parentNode.style.marginRight = `10px`;

      document.querySelectorAll(".swwets").forEach((e)=>{
        e.style.display = `none`;
      })
    
      document.querySelectorAll(".cold-drinks").forEach((e)=>{
        e.style.display = `none`;
      })
      
    } else {
      label.parentNode.style.display = `none`;

      section.forEach((sec) => {
        sec.parentNode.style.alignItems = `flex-start`;
      });
    }
  });
});












buttons.forEach((b) => {

  b.addEventListener(`click`, function () {
    
    if (b.parentNode.children[3].value < 1) {
      b.parentNode.children[3].title = `0 is not Enough`;
      b.textContent = `0 is not Enough`;
      b.style.boxShadow = `-5px 0 9px red inset`;
      b.style.animation = `none`;
      b.style.fontSize = `16px`;
      b.title = `item is not add`;
      b.parentElement.style.border = `solid 1px red`;
      this.parentElement.style.animation = `none`;
    } else if (b.parentNode.children[3].value > 20) {
      b.parentNode.children[3].title = `20 largest quantity  `;
      b.textContent = `20 largest quantity `;
      b.style.boxShadow = `-9px 0 9px #9E9E9E  inset`;
      b.style.animation = `none`;
      b.style.fontSize = `16px`;
      b.title = `item is not add`;
      b.parentElement.style.border = `solid 1px #9E9E9E`;
      this.parentElement.style.animation = `none`;
      b.parentNode.children[2];
    } else {
      let box = document.createElement(`div`);
      window.localStorage.setItem(`color`,`green`)
      b.textContent = `DONE`;
      b.style.boxShadow = `5px 0 9px green inset`;
      b.style.animation = `none`;
      b.style.fontSize = `16px`;
      b.title = `item is add`;
      b.parentElement.style.border = `solid 1px green`;
      this.parentElement.style.animation = `none`;
      cartLight.style.color = window.localStorage.getItem(`color`);
      num++;
      cartLight.textContent = `Cart is ${num}`;
      cartLight.style.textShadow = `none`;
      let names =
        b.previousElementSibling.previousElementSibling.previousElementSibling.cloneNode(
          true
        );
      let prices =
        b.previousElementSibling.previousElementSibling.cloneNode(true);
      names.style.fontSize = `20px`;
      prices.style.fontSize = `20px`;
      prices.style.marginRight = `-30px`;
      prices.style.color = `white`;
      cartitems.style.color = `white`;
      let cancele = document.createElement(`button`);
      cancele.id = `delete`;
      cancele.textContent = `remove it`;
      box.classList.add(`box`);
      box.style.display = `flex`;
      box.appendChild(names);
      box.appendChild(prices);
      b.previousElementSibling.style.color = `white`;
      b.previousElementSibling.style.backgroundColor = `black`;
      b.previousElementSibling.style.width = `70px`;
      b.previousElementSibling.style.textAlign = `center`;
      box.appendChild(b.previousElementSibling).cloneNode(true);
      box.childNodes[2].readOnly = true;
      

     


      box.appendChild(cancele)
      
      // box.childNodes[1].textContent.match(priceNumber).join(``)* box.childNodes[2].value
 
      cartitems.appendChild(box);
      cartitems.appendChild(totalPice);
      cartitems.appendChild(buyButton);
      let allprice =  box.childNodes[1].textContent.match(priceNumber).join(``)* box.childNodes[2].value;

      
    
     
      indexNum = indexNum + allprice
    
totalPice.innerHTML =`TOTAL PRICE: ${indexNum} $` ;





 
    

      


      
      
      

     cancele.onclick = function (){
      indexNum = indexNum - allprice
      totalPice.innerHTML =`TOTAL PRICE: ${indexNum} $` ;
      box.children[2].style.width = `max-content`;
      b.before(b.parentElement.appendChild(box.children[2]))
      box.remove();
      num--;
      cartLight.textContent = `Cart is ${num}`;
      cartLight.style.textShadow = `none`;
      if(cartLight.textContent == `Cart is 0`){
        cartLight.textContent = `Cart`;
        cartLight.style.color = `white`;
      }

      b.textContent = `Add to card`;
      b.style.backgroundColor = `transparent`;
      b.style.boxShadow = ` 5px 0 9px rgb(255, 175, 63) inset`;
      b.style.animation = ` btn 5s infinite alternate none ease-in-out`;
      b.parentNode.style.border = ` solid 1px  rgb(255, 175, 63)`;
      b.parentNode.style.animation = ` bore 5s infinite alternate none ease-in-out`;
      if(cartitems.children.length == 3){
        buyButton.remove();
        totalPice.remove();
        
      } 
   
     

      
   
     }
      // document.body.children[0].appendChild( b.parentNode.cloneNode(true));
    }
  });
});

document.getElementById(`Location`).onclick = () =>{
    
  location.href = `https://www.google.com/maps`;
}

document.getElementById(`about`).onclick = () =>{
    
  location.href = `./aboutas.html`;
}