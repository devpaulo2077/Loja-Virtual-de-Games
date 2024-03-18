const radioImg1 = document.getElementById('img1')
const radioImg2 = document.getElementById('img2')
const radioImg3 = document.getElementById('img3')
const radioImg4 = document.getElementById('img4')
const radioImg5 = document.getElementById('img5')

const imagem1 = document.getElementById('display-img1')
const imagem2 = document.getElementById('display-img2')
const imagem3 = document.getElementById('display-img3')
const imagem4 = document.getElementById('display-img4')
const imagem5 = document.getElementById('display-img5')


radioImg1.addEventListener('click', () => {
    if (imagem1){
        imagem1.classList.remove('invisible')
        imagem2.classList.add('invisible')
        imagem3.classList.add('invisible')
        imagem4.classList.add('invisible')
        imagem5.classList.add('invisible')
    }
})

radioImg2.addEventListener('click', () => {
    if (imagem2){
        imagem2.classList.remove('invisible')
        imagem1.classList.add('invisible')
        imagem3.classList.add('invisible')
        imagem4.classList.add('invisible')
        imagem5.classList.add('invisible')
    }
})

radioImg3.addEventListener('click', () => {
    if (imagem3){
        imagem3.classList.remove('invisible')
        imagem2.classList.add('invisible')
        imagem1.classList.add('invisible')
        imagem4.classList.add('invisible')
        imagem5.classList.add('invisible')
    }
})

radioImg4.addEventListener('click', () => {
    if (imagem4){
        imagem4.classList.remove('invisible')
        imagem2.classList.add('invisible')
        imagem3.classList.add('invisible')
        imagem1.classList.add('invisible')
        imagem5.classList.add('invisible')
    }
})

radioImg5.addEventListener('click', () => {
    if (imagem5){
        imagem5.classList.remove('invisible')
        imagem2.classList.add('invisible')
        imagem3.classList.add('invisible')
        imagem4.classList.add('invisible')
        imagem1.classList.add('invisible')
    }
})
