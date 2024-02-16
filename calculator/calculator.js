let string= '';
let buttons= document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
     button.addEventListener('click', (e)=>{
        if (e.target.innerHTML==='='){
           string= eval(string);
           document.querySelector('.input').value=string;
        }
          console.log(e.target);
          string += e.target.innerHTML;
          document.querySelector('.input').value=string;
     })
})