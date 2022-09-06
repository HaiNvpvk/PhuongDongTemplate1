const topMenu = document.getElementById('topmenu')
const iconMenu = document.getElementById('menu-icon')

document.addEventListener('click', (e) => {
    if(iconMenu.contains(e.target)){
        topMenu.classList.toggle('hainv-topmenu-expanded')
        topMenu.classList.toggle('hidden')
    } else{
        if(topMenu.classList.contains('hainv-topmenu-expanded')){
            topMenu.classList.remove('hainv-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }

});

  
    $('.slider123').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
    adaptiveHeight: false
  });

