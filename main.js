const menu = document.querySelector('.menu')
const menuStripe = document.querySelectorAll('.menu-stripe')

var open = false


menu.addEventListener('click', function addClass(){
        if(!open){
            menu.classList.add('click')
            open = true
        }else{
            menu.classList.remove('click')
            open = false
        }
        

        
        
    })
