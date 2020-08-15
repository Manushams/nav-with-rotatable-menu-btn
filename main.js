const menu = document.querySelector('.menu')
const menuStripe = document.querySelectorAll('.menu-stripe');
const overlay = document.querySelector('.overlay')
const overlayDiv =document.querySelector('.overlay-img')
const overlayList = document.querySelector('.overlay-list')
var open = false


menu.addEventListener('click', function addClass(){
        if(!open){
            menu.classList.add('click')
            overlay.classList.add('slide')
            setTimeout(() => {
                 overlayDiv.classList.add('slide')
                 overlayList.classList.add('slide-from-top')
            }, 10)
            overlay.classList.remove('invisible')
            open = true
        }else{
            overlay.classList.remove('slide')
            overlayList.classList.remove('slide-from-top')
            overlayDiv.classList.remove('slide')
            menu.classList.remove('click')
            overlay.classList.add('invisible')
            open = false
        }
    })
