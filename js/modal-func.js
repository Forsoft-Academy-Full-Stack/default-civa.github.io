    // CHAMAR MODAL
    const modalcontainer = document.querySelector('#container-modal')
    const modalbtnclose = document.querySelectorAll('#modalclose')
    const modalbtnopen = document.querySelector('#modalopen')

    modalbtnopen.onclick = event => {
        modalcontainer.style.display = 'flex'
    }

for(let x = 0; x < modalbtnclose.length; x++){
    modalbtnclose[x].onclick = event => {
        modalcontainer.style.display = 'none'
    }
}