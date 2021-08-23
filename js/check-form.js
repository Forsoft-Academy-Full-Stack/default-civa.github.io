// DECLARAÇÃO DE MODAL
getElement('finish-close-modal').addEventListener('click', modalCloseModal)  
function modalCloseModal(){
    getElement('container-modal').style.display = 'none'
}
function modalChangedData(){
    getElement('container-modal').style.display = 'flex'
}
    

// RETORNA ELEMENTO EM OBJETO
function getElement(element){
    return document.getElementById(element)
}

// INPUTS
const elementsForm = ['name-complet','date-birth','identity','country-origin','contact','email']
// ID DO FORMULARIO
const nameForm = 'form-panel-supervisor'

// EVENTO SUBMIT FORMULARIO
getElement(nameForm).addEventListener('submit', checkForm)


function checkForm(event){

   for(let num = 0; num < elementsForm.length ; num++){

    if(getElement(elementsForm[num]).value == ''){

            getElement(elementsForm[num]).parentElement.setAttribute('data-error','insira um valor')
            break;

        } else if((elementsForm.length-1) == elementsForm[num].length){

            const inputContainers = document.getElementsByClassName('input-container')
            for(let x = 0; x< inputContainers.length; x++){
                inputContainers[x].removeAttribute('data-error')
            }
            modalChangedData()
            break;
            
        }
    }
       event.preventDefault()
}