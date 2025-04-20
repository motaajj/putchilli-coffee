let btn1 = document.querySelector(`.item-one`);
let btn2 = document.querySelector(`.item-two`);
let btn3 = document.querySelector(`.item-three`);


 function one (){
    btn1.style.backgroundColor = `transparent`;
    btn1.style.color = `white`;
    btn2.style.backgroundColor = ` rgb(255, 175, 63)`;
    btn3.style.backgroundColor = ` rgb(255, 175, 63)`;
    btn2 .style.color = `black`;
    btn3 .style.color = `black`;
    btn1.style. textShadow= `none`;
    btn2.style. textShadow= `  0 3px 3px  rgb(255, 253, 253)`;
    btn3.style. textShadow= ` 0 3px 3px  rgb(255, 253, 253)`;

}

btn1.addEventListener(`click`,one)

function two (){
    btn1.style.backgroundColor = `rgb(255, 175, 63) `;
    btn2.style.color = `white`;
    btn1.style. textShadow= `  0 3px 3px  rgb(255, 253, 253)`;
    btn2.style. textShadow= `none`;
    btn3.style. textShadow= ` 0 3px 3px  rgb(255, 253, 253)`;
    btn2.style.backgroundColor = `transparent `;
    btn2.style.border = `solid 1px white`;
    btn3.style.backgroundColor = ` rgb(255, 175, 63)`;
    btn1 .style.color = `black`;
    btn3 .style.color = `black`;
    location.href = `./hotdrinks.html`;

    


}

// transparent
// rgb(255, 175, 63)
btn2.addEventListener(`click`,two)


function three (){
    btn1.style.backgroundColor = `rgb(255, 175, 63) `;
    btn2.style.backgroundColor = ` rgb(255, 175, 63)`;
    btn3.style.backgroundColor = `transparent`;
    btn3.style.color = `white`;
    btn3.style.border = `solid 1px white`;
    btn1.style. textShadow= ` 0 3px 3px  rgb(255, 253, 253)`;
    btn2.style. textShadow= ` 0 3px 3px  rgb(255, 253, 253)`;
    btn3.style. textShadow= `none`;
    btn1 .style.color = `black`;
    btn2 .style.color = `black`;
    location.href = `./sweets.html`;

    



}

btn3.addEventListener(`click`,three)

let search = document.getElementById(`search`);
let label = document.querySelectorAll(`label`);
let section = document.querySelectorAll(`section`);
let article = document.querySelector(`article`);

search.addEventListener(`keyup`,e=>{
  let strings = e.target.value.toLowerCase();
  let label = document.querySelectorAll(`label`);
label.forEach( label => {
  if(label.textContent.toLocaleLowerCase().includes(strings)){
    label.parentNode.style.display = `grid`;
    article.style.height = `100vh`;
    label.parentNode.parentNode.style.justifyContent = `center`;
    label.parentNode.style.marginRight = `10px`;

   
  
 
   


  }else{
   
 
    label.parentNode.style.display =  `none`;

    section.forEach(sec =>{
      sec.parentNode.style.alignItems = `flex-start`;

    
    
    })



  } 


 
  
 
}) 

}
)


        let home = document.querySelectorAll(`.list`)[0];
        home.onclick = function(){
          location.href = `./home.html`;
        }
     

      
        let buttons = document.querySelectorAll(`button`);
        let cartLight = document.querySelectorAll(`.list`)[3];


      buttons.forEach(b=>{
        b.addEventListener(`click`,function(){
          
          
            if(b.parentNode.children[3].value < 1){
              b.parentNode.children[3].title = `0 is not Enough`;
              b.textContent = `0 is not Enough`;
              b.style.boxShadow = `-5px 0 9px red inset`;
              b.style.animation = `none`;
              b.style.fontSize = `16px`;
              b.title = `item is not add`;
              b.parentElement.style.border = `solid 1px red`;
              this.parentElement.style.animation = `none`;


            }

              else if (b.parentNode.children[3].value > 20){
                b.parentNode.children[3].title = `20 largest quantity  `;
                b.textContent = `20 largest quantity `;
                b.style.boxShadow = `-9px 0 9px #9E9E9E  inset`;
                b.style.animation = `none`;
                b.style.fontSize = `16px`;
                b.title = `item is not add`;
                b.parentElement.style.border = `solid 1px #9E9E9E`;
                this.parentElement.style.animation = `none`;
              }


             else {
              b.textContent = `DONE`;
              b.style.boxShadow = `5px 0 9px green inset`;
              b.style.animation = `none`;
              b.style.fontSize = `16px`;
              b.title = `item is add`;
              b.parentElement.style.border = `solid 1px green`;
              this.parentElement.style.animation = `none`;
              cartLight.style.color = `green`;


            }
         
         
        })
      })
        
        

    
      
          
          
       
