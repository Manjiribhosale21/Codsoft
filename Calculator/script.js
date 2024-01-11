const inputvalue=document.getElementById("user-input");

const calculate=document
   .querySelectorAll(".operations")
   .forEach(function(item){
    item.addEventListener("click",function(e){
        let lastvalue=inputvalue.innerText.substring(
            inputvalue.innerText.length,
            inputvalue.innerText.length - 1
         );

         if (!isNaN(lastvalue) && e.target.innerText==="="){
            inputvalue.innerText=eval(inputvalue.innerText);
         } else if(e.target.innerText==="AC"){
            inputvalue.innerText="0";
         } else if(e.target.innerText==="DEL"){
            inputvalue.innerText=inputvalue.innerText.substring(
                0,
                inputvalue.innerText.length - 1
            );

          if(inputvalue.innerText.length==0){
            inputvalue.innerText="0";
         }    
         } else {
            if(!isNaN(lastvalue)){
                inputvalue.innerText+=e.target.innerText;
            }
        }  
    });
   });

const number=document.querySelectorAll(".numbers").forEach(function(item){
    item.addEventListener("click",function(e){
        if(inputvalue.innerText==="0"){
            inputvalue.innerText="";
        }
        inputvalue.innerText+=e.target.innerText.trim();
    });
}); 
/*let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});*/
