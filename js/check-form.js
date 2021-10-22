// RETORNA ELEMENTO EM OBJETO
function getElement(element){
    return document.querySelector(element)
}
// EVENTO SUBMIT FORMULARIO
getElement(nameForm).addEventListener('submit', checkForm)




const  input = document.querySelectorAll('.input-container')

 




function checkForm(event){

let formComplet = true 

// se o formulario estiver vazio
for(let num = 0; num < elementsForm.length ; num++){


    // CAMPOS INPUT
    if(getElement(elementsForm[num]).value == ''){

        formComplet = false
        getElement(elementsForm[num]).parentElement.setAttribute('data-error','Campo obrigatório!')

    } else {

        getElement(elementsForm[num]).parentElement.removeAttribute('data-error')
    
    }

    // INPUT DE DDI E NUMERO
    if(getElement(elementsForm[num]).parentElement.className == 'container-row-number' && getElement(elementsForm[num-1]).value == '' || getElement(elementsForm[num]).value == ''){

         getElement(elementsForm[num]).parentElement.parentElement.setAttribute('data-error','Campo obrigatório!') 
        
    }  else  {
     getElement(elementsForm[num]).parentElement.parentElement.removeAttribute('data-error')
    }


}

// Caso esteja todo preenchido
if(formComplet == true){
window.alert('Formulario enviado!')
}
event.preventDefault()
}