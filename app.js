const getColor = ()=>{

     const randomNumber = Math.floor(Math.random() * 16777215);
     // console.log(randomNumber);
     const randomCode = "#" + randomNumber.toString(16);
     console.log(randomCode);

     document.body.style.backgroundColor = randomCode;
     document.getElementById("color-code").innerText = randomCode;

     navigator.clipboard.writeText(randomCode);   // copy code

}

// event call 
document.getElementById("btn").addEventListener(
   "click",
   getColor
)

getColor();   // initial call