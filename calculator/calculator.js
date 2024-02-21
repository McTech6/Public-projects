class calculator{
   constructor(previousButton,presentButton){
      this.previousButton= previousButton
      this.presentButton= presentButton
      this.clear()
   }

   clear(){
        this.presentButton= ''
        this.previousButton= ''
        this.operation=undefined

   }

   delete(){

   }

   append(number){
         this.presentButton =number
   }

   chooseOperation(operation){

   }

   compute(){

   }

   updateDisplay(){
       this.presentButton.innerText= this.presentButton     
   }

}

const numberButtons= document.querySelectorAll('[data-number]')
const operationButton= document.querySelectorAll('[data-operation]')
const equalButton= document.querySelector('[data-equal]')
const deleteButton= document.querySelector('[data-delete]')
const acButton= document.querySelector('[data-ac]')
const previousButton= document.querySelector('[data-previous]')
const presentButton= document.querySelector('[data-present]')

const calculator =new calculator(previousButton, presentButton)

numberButtons.forEach(button => {
   button.addEventListener('click', ()=>{
      calculator.append(button.innerText)
      calculator.updateDisplay()
   })
})