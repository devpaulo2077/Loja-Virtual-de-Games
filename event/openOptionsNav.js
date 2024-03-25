const boxOptions = document.getElementById('box-op')
const buttonOpenOptions = document.getElementById('list-nav-op')
const buttonCloseOptions = document.getElementById('close-list')
const fechar = document.querySelector(".options-nav")
let ct = 0


buttonOpenOptions.addEventListener('click', ()=>{
    if(ct === 0){
        ct = 1
        openOptionsNav()
    }else{
        ct = 0
        closeOptionsNav()
        
    }
})

// buttonCloseOptions.addEventListener('click', closeOptionsNav)


function openOptionsNav(){
    boxOptions.classList.remove('invisible')
    boxOptions.classList.add('options-nav')
    
}

function closeOptionsNav(){
        boxOptions.classList.add('invisible')
        boxOptions.classList.remove('options-nav')
}

// function closeOptionsNav(){
//     buttonCloseOptions.classList.add('invisible')
//     buttonCloseOptions.classList.remove('options-nav')
//     buttonCloseOptions.setAttribute('id', 'box-op')
// }



// buttonOpenOptions.addEventListener('click', () => {
//     boxOptions.innerHTML = '<li id="close-list">Opções  <i class="bi bi-chevron-up"></i><div id="options-nav"><button>Comunidades</button><button>Gift Cards</button><button>Loja Virtual</button></div>'
// })

// buttonCloseOptions.addEventListener('click', () => {
//     console.log('Olá')
//     boxOptions.innerHTML = '<li onclick="closeOptions()" id="list-nav-op">Opções<i class="bi bi-chevron-down"></i>'
// })

// function closeOptions() {
//     console.log('funciona...')
//     boxOptions.innerHTML = '<li id="list-nav-op">Opções<i class="bi bi-chevron-down"></i>'
// }