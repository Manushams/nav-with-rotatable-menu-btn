const menu = document.querySelector('.menu')
const menuStripe = document.querySelectorAll('.menu-stripe');
const overlay = document.querySelector('.overlay')

var open = false


menu.addEventListener('click', function addClass(){
        if(!open){
            menu.classList.add('click')
            overlay.classList.remove('invisible')
            open = true
        }else{
            menu.classList.remove('click')
            overlay.classList.add('invisible')
            open = false
        }
    })
