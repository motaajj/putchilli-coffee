// About background of body

let perant = document.querySelector(`body`);

let num = 0;

function changeCover (){

    let covers = [`url(cov2.jpg)`,`url(cov3.jpg)`,`url(cov4.jpg)`,`url(cov5.jpg)`];
if(num < covers.length){
 perant.style.background = `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.6)),${covers[num]}`;
 perant.style.backgroundRepeat = "no-repeat";
 perant.style.position = `center`;
 perant.style.backgroundSize = `cover`;
 perant.style.width = `auto`;
 perant.style.backgroundAttachment = `fixed`
 perant.style.height = `100vh`
 num ++;
}
 else if(num >= covers.length){
 perant.style.background = `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.6)), url(./cover3.jpg)`;
 perant.style.backgroundRepeat = "no-repeat";
 perant.style.backgroundRepeat = "no-repeat";
 perant.style.position = `center`;
 perant.style.backgroundSize = `cover`;
 perant.style.width = `auto`;
 perant.style.height = `100vh`
 num = 0
 
}

}

setInterval(changeCover,6000)

// About new user 

let info = document.querySelector(`.info`)
let newAccount = document.querySelector(`.newAcount`);

let content = document.querySelector(`.content`)
newAccount.onclick = function(){

    let back = document.createElement(`img`);
    back.classList.add(`back`);
    back.src = `./back-removebg-preview.png`;
    content.appendChild(back);

    let perantBack = document.querySelector(`.perantBack`);

    back.onclick = function (){
      location.reload();

    }
    perantBack.appendChild(back)



    let labelText = document.createTextNode(`choose your city?`);
    let button = document.querySelector( `button`);
    let textOfNewAcc = document.querySelector(`p`);
    textOfNewAcc.remove();
    button.remove();
    newAccount.remove();
    //create here
    let label = document.createElement(`label`);
    label.style.cssText = ` margin-top: -24px;`
    label.appendChild(labelText)
    info.appendChild(label)
    let inputCity = document.createElement(`select`);
    inputCity.type =`text`;
    inputCity.placeholder = `chose your city`;
    inputCity.style.cssText = `text-align: center;
    background-color: transparent;
    width: auto;
    height: 30px;
    margin-top: 5px;
    border-radius: 10px;
`
    let options = document.createElement(`optgroup`);
   options.label = `citys:`
    let op0 = document.createElement(`option`);
    let op1 = document.createElement(`option`);
    let op2 = document.createElement(`option`);
    let op3= document.createElement(`option`);
    let op4 = document.createElement(`option`);
    let op5 = document.createElement(`option`);
    op0.textContent = `--choose your city--`;
    op0.classList.add(`op0`)
    op1.textContent = `tabuk`;
    op2.textContent = `dmamm`;
    op3.textContent = `abha`;
    op4.textContent = `jeddah`;
    op5.textContent = `AL-qaseem`;


    inputCity.appendChild(op0);
    inputCity.appendChild(options);
    options.appendChild(op1);
    options.appendChild(op2);
    options.appendChild(op3);
    options.appendChild(op4);
    options.appendChild(op5);

    let button2 = document.createElement(`button`);
    button2.textContent = `CREATE`;
    info.appendChild(inputCity);

    button2.style.cssText = `  color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 20px;
    border-radius: 8px;
    background-color: rgba(88, 54, 3, 0.712);
    cursor: pointer;
    margin-top: 36px;`

    info.appendChild(button2);

    let media = document.createElement(`div`);
    media.classList.add(`media`)

    let facebook = document.createElement(`p`);
    facebook.id = `md`;
    facebook.textContent =`Login With:`;

    let instagram = document.createElement(`p`);
    instagram.id = `md`;
    instagram.textContent =`Login With:`;

    let facImge = document.createElement(`img`);
    facImge.src =`./facebook.png`;
    facImge.classList.add(`mediaImge`);

    let instaImge = document.createElement(`img`);
    instaImge.src =`./instagram.png.`;
    instaImge.classList.add(`mediaImge`);

    facebook.onclick = function (){
        location.href = `https://www.facebook.com/?locale=ar_AR`;
    }
    instagram.onclick = function (){
        location.href = `https://www.instagram.com/?hl=ar`;
    }

    facebook.appendChild(facImge);
    instagram.appendChild(instaImge);


    media.appendChild(facebook);
    media.appendChild(instagram);
   


    content.appendChild(media);
    console.log(inputCity.value)

    document.forms[0].onsubmit =()=>{
        let rexp = /05\w+/ig;
        
    
    if(document.getElementById(`namee`).value.length > 5 && document.getElementById(`pass`).value.length === 10
    && rexp.test(document.getElementById(`pass`).value) && inputCity.value !== `--choose your city--`){

     return true
    
       
      } else {
        return false

      }
    }


}





document.forms[0].onsubmit =()=>{
    let rexp = /05\w+/ig;
    

if(document.getElementById(`namee`).value.length > 5 && document.getElementById(`pass`).value.length === 10
&& rexp.test(document.getElementById(`pass`).value )){

    

   
   return true
  } else {
    return false
  }
}






