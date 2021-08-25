// RETORNA ELEMENTO EM OBJETO
function getElement(element){
    return document.querySelector(element)
}
// EVENTO SUBMIT FORMULARIO
getElement(nameForm).addEventListener('submit', checkForm)


function checkForm(event){

   for(let num = 0; num < elementsForm.length ; num++){

    if(getElement(elementsForm[num]).value == ''){

            getElement(elementsForm[num]).parentElement.setAttribute('data-error','Campo obrigatório!')

    } else if((elementsForm.length-1) == num){

        getElement(elementsForm[num]).parentElement.removeAttribute('data-error')

        window.alert('formulario enviado com sucesso!')

    } else {
            getElement(elementsForm[num]).parentElement.removeAttribute('data-error')
        }
    }

       event.preventDefault()
}
