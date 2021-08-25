// procurar no documento o elemento
const itensLanguage = document.querySelector('#change-langague')
const langaguePT = document.querySelector('[langague=portugues]')
const langagueEN = document.querySelector('[langague=english]')
const iconCheck = document.querySelector('#icon-check-language')


langaguePT.onclick = event => {
    langaguePT.children[1].style.display = 'initial'
    langagueEN.children[1].style.display = 'none'
   }  

langagueEN.onclick = event => {
    langagueEN.children[1].style.display = 'initial'
    langaguePT.children[1].style.display = 'none'
   }  

   /*     
   
   btnToggle.classList.toggle('active-toggle')
   
    if(btnToggle.classList == 'toggle-btn'){
   
        toggleName.textContent = 'Ativado' 
   
    }  else { 
   
    toggleName.textContent = 'Desativado'
   
   } */