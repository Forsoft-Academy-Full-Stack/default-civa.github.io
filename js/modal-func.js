function getElement(id){ return document.querySelector(id) }


// MODAL ADICIONE . PARA REFERENCIAR A CLASSE
const modalcontainer = ['.modal-atencao','.modal-concluido','.modal-concluido-2b','.modal-input']

// BOTAO ABRIR
const openModal = ['#open-modal-atencao','#open-modal-concluido','#open-modal-concluido-2b','#open-modal-input']

// BOTAO FECHAR 
const closeModal = ['#close-modal-atencao','#close-modal-concluido','#close-modal-concluido-2b','#close-modal-input']



// ABRIR MODAL / altere o indice para mudar o item do array
getElement(openModal[0]).addEventListener('click', ()=> {
getElement(modalcontainer[0]).classList.add('show-modal')})

getElement(openModal[1]).addEventListener('click', ()=> {
getElement(modalcontainer[1]).classList.add('show-modal')})

getElement(openModal[2]).addEventListener('click', ()=> {
getElement(modalcontainer[2]).classList.add('show-modal')})

getElement(openModal[3]).addEventListener('click', ()=> {
getElement(modalcontainer[3]).classList.add('show-modal')})



// FECHA MODAL
getElement(closeModal[0]).addEventListener('click', ()=> {
getElement(modalcontainer[0]).classList.remove('show-modal')})

getElement(closeModal[1]).addEventListener('click', ()=> {
getElement(modalcontainer[1]).classList.remove('show-modal')})

getElement(closeModal[2]).addEventListener('click', ()=> {
getElement(modalcontainer[2]).classList.remove('show-modal')})

getElement(closeModal[3]).addEventListener('click', ()=> {
getElement(modalcontainer[3]).classList.remove('show-modal')})
