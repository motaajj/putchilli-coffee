let numCridit = document.querySelectorAll(`.number-input`)[0];
let numCartDesign = document.querySelector(`.number-of-cart`);
let nameInput = document.querySelectorAll(`.number-input`)[1];
let nameCart = document.querySelector(`.name`);
let dateInput = document.querySelectorAll(`.number-input`)[2];
let dateCart = document.querySelector(`.date`);
let passInput = document.querySelectorAll(`.number-input`)[3];



numCridit.addEventListener(`keyup`,()=>{
if(Number(numCridit.value)){
    numCartDesign.textContent = numCridit.value.match(/\d{4}/ig).join(` `);
    numCartDesign.style.fontSize = `18px`;


}
 else if(String(numCridit.value)){
    numCridit.value = ``
} 
else{
    numCartDesign.textContent = `XXXX XXXX XXXX XXXX`;
    numCartDesign.style.fontSize = `12px`;

}

})




// name Cart

nameInput.addEventListener(`keyup`,()=>{

nameCart.textContent =String( nameInput.value.match(/\w+/ig)).toUpperCase();
nameCart.style.fontSize = `17px`;

 if(Number(nameInput.value)){
    nameInput.value = ``;
}

else if(nameInput.value === ``){
    nameCart.textContent = `XXXXXXX XXX`;
    nameCart.style.fontSize = `12px`;
}

})


//date

dateInput.addEventListener(`change`,()=>{
    if(Number(dateInput.value)){
        
        dateCart.textContent = dateInput.value[0] +  dateInput.value[1] + `/` + 
         dateInput.value[2] 
        +  dateInput.value[3];

        dateCart.style.fontSize = `17px`;
        if(dateInput.value.length < 4){
            dateCart.textContent = `XX/XX`;
            dateCart.style.fontSize = `12px`;


        }
         
    }
    else if(String(dateInput.value)){
        dateInput.value = ``;
        dateCart.textContent = `XX/XX`;
        dateCart.style.fontSize = `12px`;


    }
    else{
        dateCart.textContent = `XX/XX`;
        dateCart.style.fontSize = `12px`;

    }
}) 

//pass

passInput.addEventListener(`keyup`,()=>{
    if(Number(passInput.value)){
        return true
    } else{
        passInput.value = ``;
    }
})

let banks = document.querySelector(`select`);
let criditCard = document.querySelector(`.cridt-card`);
let bankLogo = document.querySelector(`.bank-logo`);
let visaLogo = document.querySelector(`.visa-logo`);


banks.onchange = ()=>{
   if(banks.value == `AL-rajhi`){
    criditCard.style.background = `linear-gradient(rgb(0 0 0 / 85%), rgb(12 8 129))`;
    bankLogo.src = `./bank_logo_1-removebg-preview.png`;
    visaLogo.src = `./visa-logo-800x450-removebg-preview.png`;
    bankLogo.style.width = `98px`;
    bankLogo.style.height = `50px`;
    bankLogo.style.margin = `5px`;
    criditCard.style.transition = `all 1s 0.4s linear`;





   } else if(banks.value == `AL-ahly`){
    criditCard.style.background = `linear-gradient(rgb(0 0 0 / 89%), rgb(10 105 30 / 77%))`;
    bankLogo.src = `./تنزيل__1_-removebg-preview.png`;
    visaLogo.src = `./master_card-removebg-preview.png`;
    bankLogo.style.width = `110px`;
    bankLogo.style.height = `70px`;
    bankLogo.style.marginTop = `-10px`;
    criditCard.style.transition = `all 1s 0.4s linear`;
    



   } else if (banks.value == `AL-enmaa`){
    visaLogo.src = `./master_card-removebg-preview.png`;
    bankLogo.src = `./enmma-removebg-preview.png`;
    criditCard.style.background = `linear-gradient(rgb(0 0 0 / 62%), rgb(64 7 0))`;
    bankLogo.style.width = `99px`;
    bankLogo.style.height = `21px`;
    bankLogo.style.marginTop = `11px`;
    criditCard.style.transition = `all 1s 0.4s linear`;


    


   }
   else {
    bankLogo.style.width = `98px`;
    bankLogo.style.height = `50px`;
    bankLogo.style.margin = `5px`;
    bankLogo.src = `./bank_logo_1-removebg-preview.png`;
    visaLogo.src = `./visa-logo-800x450-removebg-preview.png`;
    criditCard.style.background = ` rgba(255, 255, 255, 0.08)`;
   }
}

// get location




document.querySelector(`.location`).addEventListener(`click`, locationFun = ()=> {

    if(navigator.geolocation){
   
       navigator.geolocation.getCurrentPosition(showposition,showerror);
   
       }

       
   
    });

    let showposition = (position)=>{
     let lat = position.coords.latitude;
     let long = position.coords.longitude;
     document.querySelector(`.location`).textContent = `we got your location`;
     document.querySelector(`.location`).style.backgroundColor = `black`;
     document.querySelector(`.location`).style.fontSize = `18px`;
     document.querySelector(`.location`).style.padding = `0px`;


     console.log(lat,long);

    }

    let showerror = (error)=>{
        document.querySelector(`.location`).textContent = `try agin`;
        document.querySelector(`.location`).style.fontSize = `14px`;


    console.log(error)
    }

     let buyBtn =  document.querySelector(`.Buy`);
     buyBtn.onclick = ()=>{
      
        

        if(numCridit.value.length === 16 &&
             dateCart.textContent.length === 5 && 
             passInput.value.length === 3 && nameInput.value.length > 4 &&
             document.querySelector(`.location`).style.backgroundColor == `black`){
           return true
        } else {
          
            return false
        } 
       

    }




