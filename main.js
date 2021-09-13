//navbar script:
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementById('navbar-links')
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//image sliders:
const artGalleryImg = [
    'img/Thumbnails/2_Mendelsohn-North.jpg',
    'img/Thumbnails/18_TheEnigmaof.jpg',
    'img/Thumbnails/Cover.jpg',
    'img/Thumbnails/14_Amit.png',
    'img/Thumbnails/Pine-Cone-Front.jpg',
]
const architectureGalleryImg = [
    'img/Thumbnails/3.jpg',
    'img/Thumbnails/e_VR_ICI009-2.jpg',
    'img/Thumbnails/historic.jpg',
    'img/Thumbnails/erez012.jpg',
    'img/Thumbnails/IMG_6035.jpg',
    'img/Thumbnails/nw-color-1-rendered.jpg',
    'img/Thumbnails/CCF31072010_00002.jpg',
    'img/Thumbnails/azrieli-sarona_moshe-tzur-architects-and-town-planners8.jpg',
]
const academicsAndTheoryImg = [
    'img/Thumbnails/10_Tempelhof.jpg',
    'img/Thumbnails/12_Self-Color.jpg',
    'img/Thumbnails/AhuzatBayit.jpg',
    'img/Thumbnails/Rembrandt_van_Rijn_-_Portrait_of_the_Artist_as_a_Young_Man_-_Google_Art_Project.jpg',
    'img/Thumbnails/Figure10_Nürnberg,_Reichsparteitag,_Lichtdom.jpg',
]
const webDevelopmentImg = [
    'img/Thumbnails/card-game.jpg',
    'img/Thumbnails/todo-list.png',
    'img/Thumbnails/trade-app.png'
]

const changeImgTimeInterval = 4000

function changeImg(id, images, i) {
    $('#' + id).css('background-image', 'url(' + images[i] + ')').addClass('fade-in-image-slider') 
    if (i < images.length -1) {
        i++
    }
    else {
        i = 0
    }
    setTimeout("changeImg('"+ id +"', "+ id +", " + i + ")", changeImgTimeInterval) //id and array have the same name. 
}

//intro page effects:
function slideIntro() {
    $('#intro-page').slideUp(1900) 
    $('#main-page').slideDown(1900)
    $('#lastline').slideDown(1400)
    $('.overImage').fadeOut(800)
}

$(window).on('load', function () {
    setTimeout(() => {
        slideIntro()
        changeImg("artGalleryImg", artGalleryImg, 0)
        changeImg("architectureGalleryImg", architectureGalleryImg, 0)
        changeImg("academicsAndTheoryImg", academicsAndTheoryImg, 0)
        changeImg("webDevelopmentImg", webDevelopmentImg, 0)  
    }, 4800)
    
});
