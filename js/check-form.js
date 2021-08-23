// RETORNA ELEMENTO EM OBJETO
function getElement(element){
    return document.getElementById(element)
}
// EVENTO SUBMIT FORMULARIO
getElement(nameForm).addEventListener('submit', checkForm)


function checkForm(event){

   for(let num = 0; num < elementsForm.length ; num++){

    if(getElement(elementsForm[num]).value == ''){

            window.alert(`O campo ${getElement(elementsForm[num]).name} está vazio`)

    } else if((elementsForm.length-1) == num){
            window.alert(`Formulario enviado com sucesso`)
            break;
            
        }
    }
       event.preventDefault()
}