const containerPhoto = document.querySelector('.photo-profile')
const inputFile = document.querySelector('#get-photo')
const photo = document.querySelector('#photo-user')

// Pegar 
containerPhoto.addEventListener('click', getPhoto)

function getPhoto(){
    inputFile.click()
}

inputFile.addEventListener('change', setPhoto)

function setPhoto(event){

    if(inputFile.files.length <= 0){
        return 
    }

    const reader = new FileReader()

    reader.onload = () =>{
        photo.src = reader.result
    }

    reader.readAsDataURL(inputFile.files[0])
}